import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppWrapper } from '../../../style';

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
        <p>{this.state.value}</p>
      </AppWrapper>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;