const TodoItem = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.isComplete} />
      <span
        style={
          todo.isComplete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {todo.description}
      </span>
    </li>
  );
};
export default TodoItem;
