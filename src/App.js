import "./App.css";
// Importing components
import { useState } from "react";
import { Form } from "./components/form/Form";
import { TodoList } from "./components/todo-list/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="header_title">
        <h1> Today's Task 🗓</h1>
      </header>

      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
