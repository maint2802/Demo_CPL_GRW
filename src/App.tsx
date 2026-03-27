import { useState, useEffect, useCallback } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
// import export
import type { Todo } from "./types/types";
import Counter from "./components/Counter";

function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);
  const [counter, setCounter] = useState(0);

  const callback = useCallback((value: number) => {
    console.log("value from App: ", value);
  }, []);

  // object(array) +  function

  return (
    <div>
      <TodoAdd todolist={todolist} setTodolist={setTodolist} />
      <TodoList todolist={todolist} />
      <Counter callback={callback} counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;

// useEffect
// useCallback
// IIFE:

(function sun(a, b) {
  return a + b;
})(1, 2);

// sum(1,2)

// React.memo -> HOC -> higher order component
// HOF: higher order function
