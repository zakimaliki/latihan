// import React, { useState } from "react";

// function TodoForm(props) {
//   const [input, setInput] = useState("");

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     props.onSubmit({
//       id: Math.floor(Math.random() * 10000),
//       text: input,
//     });
//     setInput("");
//   };

//   return (
//     <form className="todo-app" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="input text here"
//         value={input}
//         className="todo-input"
//         onChange={handleChange}
//       />
//       <button className="todo-button">Add</button>
//     </form>
//   );
// }

// export default TodoForm;
