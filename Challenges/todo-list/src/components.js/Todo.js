export function Todo({ tasks, setTask, onDeleteTask }) {
  function handleTaskDone(id) {
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
            onChange={() => handleTaskDone(item.id)}
          />
          {item.task}
          <span onClick={() => onDeleteTask(item.id)}>❌</span>
        </div>
      ))}
    </div>
  );
}
