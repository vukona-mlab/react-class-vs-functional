import "./App.css";
import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="class">
        <h1>Counter - Class</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default ClassComponent;
