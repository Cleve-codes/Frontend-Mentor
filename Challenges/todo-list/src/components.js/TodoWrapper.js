import { useState } from "react";

const toDoList = [
  {
    task: "Code",
    id: 1,
  },
  {
    task: "Eat",
    id: 2,
  },
  {
    task: "Sleep",
    id: 3,
  },
];

export default function TodoWrapper() {
  const [tasks, setTask] = useState([]);
  const [todo, setTodo] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (todo.trim === "") return;

    const newTask = {
      task: todo,
      id: crypto.randomUUID(),
    };
    setTask((tasks) => [...tasks, newTask]);
    setTodo("");
  }

  return (
    <div className="TodoWrapper">
      <TodoForm onAddTask={handleAddTask} todo={todo} setTodo={setTodo} />
      <Todo tasks={tasks} setTask={setTask} />
    </div>
  );
}

function TodoForm({ onAddTask, todo, setTodo }) {
  return (
    <form className="TodoForm">
      <input
        type="text"
        placeholder="Input task..."
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-btn" onClick={onAddTask}>
        Add
      </button>
    </form>
  );
}

function Todo({ tasks }) {
  return (
    <div>
      {tasks.map((item) => (
        <div key={item.id} className="Todo">
          <input type="checkbox" className="checkbox" />
          {item.task}
          <span>🚮</span>
        </div>
      ))}
    </div>
  );
}
