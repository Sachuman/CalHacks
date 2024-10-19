import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./app/Login";
import Choose from "./app/Choose";
import Train from "./app/Train";
import UploadSearch from "./app/UploadSearch";
import Search from "./app/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/train" element={<Train />} />
        <Route path="/upload" element={<UploadSearch />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;