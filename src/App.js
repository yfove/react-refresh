import React, { useState } from "react";
import "./styles.css";

// Display Component
const Display = ({ counter }) => <div>{counter}</div>;

// Button Component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default function App() {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="reset" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
}
