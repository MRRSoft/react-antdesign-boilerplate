import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import { withLoading } from "hocs/withLoading.hoc";
import RequireAuth from "./RequireAuth";
import MainLayout from "layouts/MainLayout/MainLayout";

export const DASHBOARD_PATH = "/";

const AuthLayoutFallback = React.lazy(
  () => import("layouts/AuthLayout/AuthLayout")
);
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));

const Logout = React.lazy(() => import("./Logout"));
const Dashboard = withLoading(DashboardPage);
const LogoutFallback = withLoading(Logout);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
      </Routes>
    </BrowserRouter>
  );
};
