import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

// import { useState } from "react";
// import TodoItem from "./TodoItem";
// export default function Todo() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   function handleSubmit(e) {
//     e.preventDefault();
//     setTodos([...todos, todo]);
//     setTodo("");
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={(e) => setTodo(e.target.value)}
//           value={todo}
//           type="text"
//           placeholder="Enter a todo"
//         />
//         <button type="submit">Add</button>
//       </form>

//       {todos.map((item) => (
//         <h3 key={item}>{item}</h3>
//       ))}
//     </div>
//   );
// }
