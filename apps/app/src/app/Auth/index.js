import React from "react";
import Home from "../../pages/Home";
import { Storage } from "../../storage";

export default function AuthenticatedRoute({ children }) {
  const user = Storage.getItem("user");

  return <React.Fragment>{user ? children : <Home />}</React.Fragment>;
}
