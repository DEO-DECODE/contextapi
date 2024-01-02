import React, { createContext, useState } from "react";
//createContext ke help se hm hm context create kr skte hain
export const CounterContext = createContext(null);
// Ab hamein ek provider banana hai such that hr component ko uska access mil jaye.
// Renamed function to start with an uppercase letter and provide a clearer name
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount, name: "Dev" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
