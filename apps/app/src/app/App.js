import { Routes, Route} from "react-router-dom";

import Home from '../pages/Home';
import MainLayout from '../common/layout';

import './App.scss';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
