import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import httpClient from "../../api/httpClient";
import { useAuth } from "../../hooks/useAuth";
import LoginDTO from "../../types/dto/LoginDTO";
import LoginForm from "../../types/form/LoginForm";
import authUtils from "../../utils/authUtils";
import LoginPage from "./LoginPage";

function LoginPageContainer() {
  const navigate = useNavigate();

  const auth = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = useCallback(async () => {
    if (!username || !password) return;

    // example call api
    try {
      const result = await httpClient.post<LoginDTO, LoginForm>("/login", { username, password });

      if (result.data) {
        // example response data
        // const {
        //   item: { accessToken, user },
        // } = result.data;
      }
    } catch (e) {
      // handle error
    }

    const user = { id: "1", email: "abc@gmail.com", username: "username" };
    authUtils.setUser(user);
    auth.setAuth({ user });
    authUtils.setToken("ashhhwehuwqeuwqe");

    navigate("/");
  }, [username, password]);

  return (
    <LoginPage
      onLoginClick={login}
      username={username}
      password={password}
      onUsernameChange={(e) => setUsername(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
    />
  );
}

export default LoginPageContainer;
