import { useState } from 'react';
import './App.css';

export default function App() {
  //useState need 2 things: ariable and function
  const [counter, setCounter] = useState(0);

  // function setCounter(newValue) {
  //   counter = newValue;
  // }

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }
  return (
    <main>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </main>
  );
}
