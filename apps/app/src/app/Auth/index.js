import React from "react";
import { Navigate, useLocation } from "react-router-dom"
import { Storage } from "../../storage";

export default function AuthenticatedRoute({ children }) {
  let user = Storage.getItem("user");
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
