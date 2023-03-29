import { useAppDispatch } from "hooks/reduxHooks";
import React, { useEffect } from "react";

import { doLogout } from "store/slices/auth.slice";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogout());
    const win: Window = window;
    win.location = "/auth/login";
  }, [dispatch]);

  return <></>;
};

export default Logout;
