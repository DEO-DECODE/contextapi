import React from "react";
import Counter from "./components/Counter";
import { useContext } from "react";
// Kisi v context ke value ko access krne ke liye hme , ek hook chahiye hota hai jisko hm useContext khte hain.
import { CounterContext } from "./context/Counter";
const App = () => {
  const CounterState = useContext(CounterContext);
  // Context ke ander jo state pari hai , usko read krke idhar le aaya hai.
  return (
    <div>
      <h1> Count is {CounterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
