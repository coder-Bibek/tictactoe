import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import AuthenticatedRoute from "./Auth";
import Home from "../pages/Home";
import MainLayout from "../common/layout";
import Play from "../pages/Play";
import WaitingRoom from "../pages/Waiting";

import "./App.scss";
import { Storage } from "../storage";

function App() {
  const location = useLocation();
  const user = Storage.getItem("user");
  const host = Storage.getItem("host");

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/play" state={{ from: location }} replace />
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/play"
          element={
            host ? (
              <Navigate to="/wait" state={{ from: location }} replace />
            ) : (
              <AuthenticatedRoute>
                <Play />
              </AuthenticatedRoute>
            )
          }
        />
        <Route
          path="/wait"
          element={
            !host ? (
              <Navigate to="/play" state={{ from: location }} replace />
            ) : (
              <AuthenticatedRoute>
                <WaitingRoom />
              </AuthenticatedRoute>
            )
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
