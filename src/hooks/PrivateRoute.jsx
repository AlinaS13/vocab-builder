import React from "react";
import { Navigate } from "react-router-dom";
import { getisAuth } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getisAuth);
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/register" />;
  }
  return children;
};
