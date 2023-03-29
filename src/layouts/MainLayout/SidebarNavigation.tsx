import React from "react";
import { DashboardOutlined } from "@ant-design/icons";

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: React.ReactNode;
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: "Dashboard",
    key: "dashboard",
    url: "/dashboard",
    icon: <DashboardOutlined />,
  },
];
