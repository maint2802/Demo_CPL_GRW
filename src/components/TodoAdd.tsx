import React, { useState } from "react";
import type { TodoAddProps } from "../types/types";

const TodoAdd = ({ todolist, setTodolist }: TodoAddProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    // get input value
    // create newTodo follow format todo
    const newTodo = {
      name: inputValue,
      id: Date.now().toString(),
      completed: false,
    };
    // todolist.push(newTodo)
    // setTodolist(todolist)
    setTodolist([...todolist, newTodo]);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};

export default TodoAdd;

// todolist
// lifting state up

// useState vs useRef
