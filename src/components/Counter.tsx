import React from "react";

type CounterProps = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  callback: (value: number) => void;
};

const Counter = ({ counter, setCounter, callback }: CounterProps) => {
  console.log("render Counter");

  let test = 10;

  callback(test);

  return (
    <div>
      Counter
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>setCounter</button>
    </div>
  );
};

export default React.memo(Counter);
