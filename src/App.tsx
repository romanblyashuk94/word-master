
import { Outlet } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="content">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
