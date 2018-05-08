import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ["alpha", "bravo", "charlie", "delta"]
    };
  }

  render() {
    var arrOnScreen = this.state.arr.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{arrOnScreen}</div>;
  }
}
export default App;
