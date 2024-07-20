import "./App.css";
import React from "react";
import ConditionalRender from "./conditionalRender";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: 'Vee',
      
    };

    this.increment = this.increment.bind(this);
  }
  // Life Cycles
  // What's happening on the UI
  componentDidMount() {
    console.log('mounted');
  }
  componentDidUpdate() {
    console.log({ count: this.state.count });
  }
  componentWillUnmount() {
    console.log('unmounting');
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="class">
        <h1>Counter - Class</h1>
        <h2>{this.state.count}</h2>
        <p>{this.state.name}</p>
        {
          (this.state.count > 3 && this.state.count < 9) && 
          <ConditionalRender />
        }
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default ClassComponent;
