import Home from '../pages/Home';
import MainLayout from '../common/layout';

import './App.scss';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
