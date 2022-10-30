import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopPageContainer from "./pages/TopPage/TopPageContainer";
import MyRecordPageContainer from "./pages/MyRecordPage/MyRecordPageContainer";
import ColumnPageContainer from "./pages/ColumnPage/ColumnPageContainer";
import LoginPageContainer from "./pages/LoginPage/LoginPageContainer";
import ProtectedRouter from "./ProtectedRouter";
import MainLayout from "./layouts/MainLayout";
import { AuthContext, AuthData } from "./hooks/useAuth";
import authUtils from "./utils/authUtils";

function App() {
  const user = authUtils.getUser();
  const [auth, setAuth] = useState<AuthData>({ user });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path="login" element={<LoginPageContainer />} />

        <Route path="/" element={<MainLayout />}>
          <Route
            index
            path="/"
            element={
              <ProtectedRouter>
                <TopPageContainer />
              </ProtectedRouter>
            }
          />

          <Route
            path="my-records"
            element={
              <ProtectedRouter>
                <MyRecordPageContainer />
              </ProtectedRouter>
            }
          />

          <Route path="columns" element={<ColumnPageContainer />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
