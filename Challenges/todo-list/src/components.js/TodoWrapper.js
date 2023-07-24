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
  return (
    <div className="TodoWrapper">
      <form className="TodoForm">
        <input type="text" placeholder="Input task..." className="todo-input" />
        <button className="todo-btn">Add</button>
      </form>
      <div>
        {toDoList.map((item) => (
          <div key={item.id} className="Todo">
            <span>☑️</span>
            {item.task}
            <span>🚮</span>
          </div>
        ))}
      </div>
    </div>
  );
}
