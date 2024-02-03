import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Publish from "./pages/Publish.js";
import Solve from './pages/SolveEdit.js';
import SolveVote from './pages/SolveVote.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/publish" element={<Publish />} />
          <Route path='/solve' element={<Solve />} />
          <Route path='/solve-vote' element={<SolveVote />} />
          {/* <Route path='/publish' element={<Publish />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
