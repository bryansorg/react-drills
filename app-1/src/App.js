import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <input onChange={e => this.handleChange(e)} />
        {this.state.userInput}
      </div>
    );
  }
}
export default App;
