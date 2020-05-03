import React, { Component } from "react";
import ReactDOM from "react-dom";
import { GlobalStyle, AppWrapper } from './style';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Settings } from './Components/Settings';
import { Footer } from './Components/Footer';
import Store from "./store";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = ()=> {

    return (
      <AppWrapper>
        <GlobalStyle />
        <Store>
        <Router>
          <Header/>
          <Settings/>
          <Switch>
            <Route path="/" exact children={
              <Home />
            } />
            <Route path="/one" children={
              <h3>One</h3>
            } />
            <Route path="/two" children={
              <h3>Two</h3>
            } />
          </Switch>
          <Footer/>
        </Router>
        </Store>
      </AppWrapper>
    );
  }

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;