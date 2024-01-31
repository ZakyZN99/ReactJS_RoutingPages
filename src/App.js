import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <nav>
        <Link to={"/home"} className = 'padding'>Home</Link>
        <Link to={"/category"} className = 'padding'>Category</Link>
        <Link to={"/category/makanan"} className = 'padding'>Category Makanan</Link>
        <Link to={"/category/minuman"} className = 'padding'>Category Minuman</Link>
        <Link to={"/about"} className = 'padding'>About</Link>
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;
