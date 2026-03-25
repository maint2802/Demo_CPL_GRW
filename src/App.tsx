import { useState } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
// import export
import type { Todo } from "./types/types";

function App() {
  const [todolist, setTodolist] = useState<Todo[]>([]);

  console.log(todolist);
  return (
    <div>
      <TodoAdd todolist={todolist} setTodolist={setTodolist} />
      <TodoList todolist={todolist} />
    </div>
  );
}

export default App;

// chua re-render vs re-load
// useState
// todo -> todoapp  -> add todo
// props -> object

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

// useEffect, React.memo, useCallback
// router(react-router-dom)
// call API (axios)
// context API (useContext)
// localstorage
