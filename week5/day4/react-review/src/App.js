
import './App.css';
import routes from "./routes"
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/users/5">User!</Link>
        </nav>
      </header>
      {routes}
    </div>
  );
}

export default App;
