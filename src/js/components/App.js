import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppWrapper } from '../../../style';
import { Header } from './Header';
import { Home } from './Home';
import { createGlobalStyle } from 'styled-components'

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
export const MyContext = React.createContext(null);

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: "sup bro?..."
    };

  }

  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact children={
              <MyContext.Provider value={'balls'}>
                <Home />
              </MyContext.Provider>
            } />
            <Route path="/one" children={
              <h3>One</h3>
            } />
            <Route path="/two" children={
              <h3>Two</h3>
            } />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;