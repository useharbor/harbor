import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Solve from "./pages/SolveEdit.js";
import SolveVote from "./pages/SolveVote.js";
import Publish from "./pages/Publish.js";
import Profile from "./pages/Profile.js"
import { Routes, Route } from "react-router-dom";
import { CurrentUserProvider } from './UserContext';

function App() {
  return (
    <>
      <CurrentUserProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/solve' element={<Solve />} />
            <Route path='/solve-vote' element={<SolveVote />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </CurrentUserProvider>

    </>
  );
}

export default App;
