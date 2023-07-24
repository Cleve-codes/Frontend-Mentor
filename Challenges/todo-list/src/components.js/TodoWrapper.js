export default function TodoWrapper() {
  return (
    <div className="TodoWrapper">
      <form className="TodoForm">
        <input type="text" placeholder="Input task..." className="todo-input" />
        <button className="todo-btn">Add</button>
      </form>
      <div className="Todo">
        <span>☑️</span>
        <span>Code for 5 hours</span>
        <span>🚮</span>
      </div>
    </div>
  );
}
