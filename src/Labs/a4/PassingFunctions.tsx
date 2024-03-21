/*
This function passes a function to the event handler.
*/
import React from "react";
function PassingFunctions({ theFunction }: { theFunction: () => void }) {
    return (
      <div>
        <h2>Passing Functions</h2>
        <button onClick={theFunction} className="btn btn-primary">
          Invoke the Function
        </button>
      </div>
    );
  }
  export default PassingFunctions;