import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      {todo.text}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <b>Add Todo</b>
          <br />
        </label>
      </div>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "example to do list",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
