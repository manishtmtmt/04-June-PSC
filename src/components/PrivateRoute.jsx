import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const PrivateRoute = ({ children }) => {
  const [state] = useContext(AppContext);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};
