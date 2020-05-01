import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppWrapper } from '../style';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { createGlobalStyle } from 'styled-components'
import Store from "./store";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: sans-serif, Tahoma, Helvetica;
  }
`
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
        </Router>
        </Store>
      </AppWrapper>
    );
  }

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;