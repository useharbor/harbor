import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Login from './pages/Login.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
