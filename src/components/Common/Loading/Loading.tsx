import React from "react";

import { LoadingOutlined } from "@ant-design/icons";
interface LoadingProps {
  size?: string;
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  return <LoadingOutlined style={{ fontSize: "60px" }} />;
};
