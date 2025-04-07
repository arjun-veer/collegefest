import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Import the Login page
import Signup from "./pages/Signup"; // Import the Signup page

function App() {
  const userIsLoggedIn = false; // Change this based on your auth

  return (
    <Router>
      <Routes>
        {/* Define routes for Home and Login */}
        <Route path="/" element={<Home userIsLoggedIn={userIsLoggedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
