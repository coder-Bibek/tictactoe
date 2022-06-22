import Home from '../pages/Home';
import MainLayout from '../common/layout';
import { Routes, Route} from "react-router-dom";

import './App.scss';

function App() {
  return (
    <div className="App">
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
