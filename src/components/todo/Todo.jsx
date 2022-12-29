import "./todo.css";

export function Todo({ text, todo, todos, setTodos }) {
  // Delete Function
  const deleteFunc = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); // delete the element if it matches with its ID
  };

  // Completed Function
  const completeFunc = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        // "!el.completed" -> switch Completed attribute from False to True
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div className="buttons">
        <button
          onClick={completeFunc}
          className={`btn-done ${todo.completed ? "btn-filled" : ""}`}
        >
          <img src="./_images/check.png" alt="check-mark" />
        </button>
        <button onClick={deleteFunc} className="btn-delete">
          <img src="./_images/cross.png" alt="check-mark" />
        </button>
      </div>
    </div>
  );
}
