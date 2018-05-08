import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      food: ["ice cream", "cabbage", "pizza", "sushi", "crab legs"]
    };
  }
  handleChange(filter) {
    this.setState({ filterString: filter });
  }
  render() {
    var foodsToDisplay = this.state.food
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}> {element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
