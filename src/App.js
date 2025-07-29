import logo from './logo.svg';
import './App.css';
import About from './components/aboutcomponents';
import { Route, Link, Routes } from 'react-router-dom';
function App() {
  return (  
    <div>   
      <Link to="/About">About</Link>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;





