import { useState } from "react";

function inti() {
  console.log("init was executed");

  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(inti); //intialization
  console.log("component was rendered");

  //Call back in state function
  let incCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  return (
    <div>
      <h3>Count ={count}</h3>
      <button onClick={incCount}>Increase Count </button>
    </div>
  );
}
