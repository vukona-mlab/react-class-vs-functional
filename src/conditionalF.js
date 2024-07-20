import "./App.css";
import React, { useState, useEffect } from "react";

const ConditionalF = () => {
  const [count, setCount] = useState(0);
  // console.log(useState(0));
  const [name, surname] = ['Vee', 'Mnisi']
  // console.log({ name, surname });
  function increment() {
    setCount(count + 1);
  }
  useEffect(() => {
    console.log('cf is mounted');
    return () => {
      console.log('cf is unmounting');
    } 
  }, [])
  useEffect(() => {
    console.log({ count });
  }, [count])
  return (
    <div className="functional">
        <p>F is mounted</p>
    </div>
  );
};

export default ConditionalF;
