import { Routes, Route } from "react-router-dom";

import AuthenticatedRoute from "./Auth";
import Home from "../pages/Home";
import MainLayout from "../common/layout";
import Play from "../pages/Play";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/play"
          element={
            <AuthenticatedRoute>
              <Play />
            </AuthenticatedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
