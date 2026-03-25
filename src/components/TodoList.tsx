import React from "react";
import type { TodoListProps } from "../types/types";
const TodoList = ({ todolist }: TodoListProps) => {
  return (
    <div>
      TodoList
      <div>
        {todolist.map((todo, index) => {
          return (
            <div key={todo.id}>
              {index + 1}: {todo.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

// index
