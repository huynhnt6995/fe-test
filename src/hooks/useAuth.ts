import { createContext, useContext } from "react";
import User from "../types/User";

export type AuthData = {
  user: User;
};

export interface Auth {
  auth: AuthData;
  setAuth: (auth: AuthData) => void;
}

export const AuthContext = createContext<Auth>({
  auth: {
    user: {} as User,
  },
  setAuth: (auth: AuthData) => {
    return;
  },
});

export const useAuth = () => useContext(AuthContext);
