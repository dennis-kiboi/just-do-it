import { useState } from "react";
import close from "../assets/icons/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  // const [complete, setComplete] = useState(todo.isComplete);
  console.log(todo);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={
          todo.isComplete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.description}
      </span>
      <span>
        <img src={close} alt="close-button" onClick={handleDelete} />
      </span>
    </li>
  );
};
export default TodoItem;
