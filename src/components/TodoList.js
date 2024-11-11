import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  const todoList = todos.map(todo => (
    <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} />
  ));

  return <ul>{todoList}</ul>;
};
export default TodoList;
