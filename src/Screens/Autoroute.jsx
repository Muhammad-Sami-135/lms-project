import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Autoroute = () => {
  return !localStorage.getItem("userID") ? (
    <Outlet />
  ) : (
    <Navigate to={"/Dashboard"} />
  );
};
