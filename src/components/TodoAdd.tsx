import React, { useState, useRef } from "react";
import type { TodoAddProps } from "../types/types";

const TodoAdd = ({ todolist, setTodolist }: TodoAddProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    // get input value
    // create newTodo follow format todo
    if (!inputRef.current) return;
    const newTodo = {
      name: inputRef.current.value,
      id: Date.now().toString(),
      completed: false,
    };

    setTodolist([...todolist, newTodo]);
    // spread
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  //   preState vs currentState

  // ref arr vs obj
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};

export default TodoAdd;

// todolist
// lifting state up

// useState vs useRef
