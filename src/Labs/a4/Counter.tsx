/*
Implements a virtual DOM to show how changes in state affect changes
in the actual DOM. This is a simple counter that increments.
*/
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>Up</button>
      <button className="btn btn-danger" style={{ marginLeft: "10px" }}
      onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;