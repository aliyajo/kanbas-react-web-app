/*
This function uses references to counter and setCounter
to render the state variable and manipulate it through the 
mutator function.
*/
import React from "react";
function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div>
          <h3>Counter {counter}</h3>
          <button onClick={() => setCounter(counter + 1)}>
            Increment</button>
          <button onClick={() => setCounter(counter - 1)}>
            Decrement</button>
        </div>
      );
    }
    export default ChildStateComponent;