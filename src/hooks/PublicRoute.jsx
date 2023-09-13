import React from "react";
import { getisAuth } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getisAuth);

  if (isLoggedIn) {
    return <Navigate to="/dictionary" />;
  }
  return children;
};
