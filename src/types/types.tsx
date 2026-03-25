export type Todo = {
  name: string;
  id: string;
  completed: boolean;
};

export type TodoAddProps = {
  todolist: Todo[];
  setTodolist: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export type TodoListProps = {
  todolist: Todo[];
};
