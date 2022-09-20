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
import FirstSection from "./components/FirstSection";
import { Main } from "./styles/styles";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <Main>
        <Router>
            <Header/>           
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/contact" component={AboutPage} />
            </Switch>
            <GlobalStyles />
        </Router>
       </Main>
  );
}
