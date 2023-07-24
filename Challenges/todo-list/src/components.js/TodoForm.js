export function TodoForm({ onAddTask, todo, setTodo }) {
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
