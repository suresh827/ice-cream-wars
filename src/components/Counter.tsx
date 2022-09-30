import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(5);
  function countUp() {
    setNumber((prev) => prev + 1);
  }

  function countDown() {
    setNumber((prev) => prev - 1);
  }

  let classes = "Counter";
  if (number < 0) {
    classes = "Counter negative";
  }

  let circleSize = number * 10 + "px";
  let circleStyle = {
    width: circleSize,
    height: circleSize,
  };

  return (
    <div className={classes}>
      <p>{number}</p>
      <button onClick={countDown}>Down</button>
      <button onClick={() => setNumber(0)}>Reset</button>
      <button onClick={countUp}>Up</button>
      <div className="rectangle" style={circleStyle}></div>
    </div>
  );
};

export default Counter;
