import { useState, useEffect } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
// import export
import type { Todo } from "./types/types";

function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("without deps");
    // call API
    //
  });
  useEffect(() => {
    console.log("dep []");
    // call API
  }, []);
  useEffect(() => {
    console.log("dep todolist state");
    // call API
  }, [todolist]);

  // side effect: timer(setTimeout vs setInterval), call API, DOM event (scroll)

  // mount -> update -> unmount
  console.log(todolist);
  return (
    <div>
      {(() => {
        console.log("render");
        return <div></div>;
      })()}
      <TodoAdd todolist={todolist} setTodolist={setTodolist} />
      <TodoList todolist={todolist} />
    </div>
  );
}

export default App;

// useEffect

// IIFE:

(function sun(a, b) {
  return a + b;
})(1, 2);

// sum(1,2)
