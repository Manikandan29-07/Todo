import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  //Here slicing is done to make a copy of the exact todos...Beacause on slice() the array get sorted
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

// const numbers = [21,3,12,56,90,22]
// numbers.sort((a,b)=>a-b)             :- Sort in ascending order
// console.log(numbers)
// numbers.sort((a,b)=>b-a)             :- Sort in descending order
// console.log(numbers)
