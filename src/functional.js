import "./App.css";
import React, { useState } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="functional">
      <h1>Counter - Functional</h1>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default FunctionalComponent;
