import { useState } from "react";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import "./App.css";

export default function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTitle(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, title]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((item, ind) => ind !== id));
  };
  return (
    <div className="App">
      <TodoInput changeHandler={changeHandler} submitHandler={submitHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}