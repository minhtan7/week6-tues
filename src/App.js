import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleCount = () => {
    // setCount(count + 1);
    dispatch({ type: "increase" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrease" });
  };
  //action: object, take the type of action, info together with that type(optional)

  return (
    <div className="App">
      <button onClick={handleCount}>I have been clicked {count} times</button>
      <button onClick={handleDecrease}>don't click me </button>
    </div>
  );
}

export default App;
