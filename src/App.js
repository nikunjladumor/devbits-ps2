import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Landing from "./Landing/landing";
import Navbar from "./Navbar/Navbar";
import Instrument from "./Instruments/instruments";
import AboutUs from "./AboutUs/aboutUs";
import Stocks from "./Stocks/stocks";
import Dashboard from "./Dashboard/Dashboard";
import Crypto from "./Crypto/Crypto"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth,db } from "./firebase";

function App() {

  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else setUser("");
    });
  }, []);




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar home={false} />
                <Landing />
              </>
            }
          />
          <Route
            path="/learn"
            element={
              <>
                <Instrument />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutUs />
              </>
            }
          />
          <Route
            path="/stocks"
            element={
              <>
                <Stocks />
              </>
            }
          />

<Route
            path="/crypto"
            element={
              <>
                <Crypto />
              </>
            }
          />

<Route
            path="/Dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />


          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
