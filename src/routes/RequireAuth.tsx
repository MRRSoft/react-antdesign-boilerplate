import { useAppSelector } from "hooks/reduxHooks";
import React from "react";

import { Navigate } from "react-router-dom";
interface Props {
  children: React.ReactNode;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const token = useAppSelector((state: any) => state.auth.token);

  return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
