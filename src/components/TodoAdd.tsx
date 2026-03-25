import React from "react";

export type Todo = {
  name: string;
  id: string;
  completed: boolean;
};

type TodoAddProps = {
  todolist: Todo[];
  setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoAdd = ({ todolist, setTodolist }: TodoAddProps) => {
  console.log(todolist);
  console.log(setTodolist);
  return (
    <div>
      <input type="text" />
      <button>add</button>
    </div>
  );
};

export default TodoAdd;

// todolist
// lifting state up
