import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export default function TodoWrapper() {
  const [tasks, setTask] = useState([]);
  const [todo, setTodo] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (todo.trim() === "") return;

    const newTask = {
      task: todo,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTask((tasks) => [...tasks, newTask]);
    setTodo("");
  }

  function handleDeleteTask(id) {
    setTask((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="TodoWrapper">
      <TodoForm onAddTask={handleAddTask} todo={todo} setTodo={setTodo} />
      <Todo tasks={tasks} setTask={setTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
