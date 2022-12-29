import "./form.css";

export function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1_000 },
    ]);
    setInputText("");
    // id: generate "random ID"
  };

  return (
    <form className="form-wrapper">
      <input
        onChange={inputTextHandler}
        type="text"
        className="form-input"
        value={inputText}
        placeholder="Add task..."
      />
      <button onClick={submitHandler} className="form-button" type="submit">
        Add
      </button>
    </form>
  );
}
