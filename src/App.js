import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import React, { Component }  from 'react';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <div
              style={{
                opacity: 0,
                zIndex: -1,
                overflow: "hidden",
                width: 1,
                height: 1,
                position: "absolute",
              }}
            >
              </div>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
       
      </Switch>
    </Router>
  );
}
