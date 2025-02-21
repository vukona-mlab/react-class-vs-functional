import "./App.css";
import React, { useState, useEffect } from "react";
import ConditionalF from "./conditionalF";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  // console.log(useState(0));
  const [name, surname] = ['Vee', 'Mnisi']
  // console.log({ name, surname });
  function increment() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log('f is mounted');
    return () => {
      console.log('f is unmounting');
    } 
  }, [])
  useEffect(() => {
    console.log({ count });
  }, [count])
  return (
    <div className="functional">
      <h1>Counter - Functional</h1>
      <h2>{count}</h2>
      {
        (count > 2 && count < 5) &&
        <ConditionalF />
      }
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default FunctionalComponent;
