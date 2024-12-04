import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Testinomial from "./Testinomial";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="testi" element={<><Header /><Testinomial /></>} />
        <Route path="profile" element={<><Header /><Profile /></>} />
        
        {/* Routes without Header */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
