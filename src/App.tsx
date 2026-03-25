import "./App.css";
import { useState } from "react";

function App() {
  // let counter = 0;

  let [counter, setCounter] = useState(0);

  // let/const [state, setState]= useState(initialValue)

  const handleDecreCounter = () => {
    setCounter(counter - 1);
  };

  const handlIncreCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleDecreCounter}>-</button>
      <span>{counter}</span>
      <button onClick={handlIncreCounter}>+</button>
    </div>
  );
}

export default App;

// chua re-render vs re-load
// useState
// todo -> todoapp  -> add todo

// onclick

// tsx: typescript xml/html
// jsx: javascript xml

// template string: ${}

// true
// falsy: false, undefined, null, NaN, ''

// hooks -> func / class
// function component vs class component

// component -> thành phần

// react: 2012 2013 -> class component(state)
// 2018: 16.8 -> hooks -> function component + hooks
// function

// hooks: useState, useEffect, useRef, useCallback,

// let i = 2;

// console.log(i--);
// // i=1
// console.log(--i); //0
