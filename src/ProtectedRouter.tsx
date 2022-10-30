import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";


function ProtectedRouter({ children }: React.PropsWithChildren) {
  const { auth } = useAuth();

  if (!auth.user.id) {
    return <Navigate to="/login" />;
  }

  return children as JSX.Element;
}

export default ProtectedRouter;
