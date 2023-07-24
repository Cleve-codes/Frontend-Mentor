import { useState } from "react";

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

function Todo({ tasks, setTask }) {
  function handleTaskComplete(id) {
    setTask((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div>
      {tasks.map((item) => (
        <div
          key={item.id}
          className={`Todo ${item.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            className="checkbox"
            checked={item.completed}
            onChange={() => handleTaskComplete(item.id)}
          />
          {item.task}
          <span>❌</span>
        </div>
      ))}
    </div>
  );
}
