import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/Counter";
const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => {
          counterContext.setCount(counterContext.count + 1);
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          counterContext.setCount(counterContext.count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
