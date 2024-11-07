import TodoItem from "./TodoItem";

const todos = [
  {
    isComplete: false,
    description: "Learn JavaScript",
    id: 1
  },
  {
    isComplete: true,
    description: "Buy groceries",
    id: 2
  },
  {
    isComplete: false,
    description: "Finish the report",
    id: 3
  },
  {
    isComplete: true,
    description: "Call the doctor",
    id: 4
  },
  {
    isComplete: false,
    description: "Go for a run",
    id: 5
  },
  {
    isComplete: false,
    description: "Read a book",
    id: 6
  },
  {
    isComplete: true,
    description: "Pay the bills",
    id: 7
  },
  {
    isComplete: false,
    description: "Clean the house",
    id: 8
  },
  {
    isComplete: true,
    description: "Attend the meeting",
    id: 9
  },
  {
    isComplete: false,
    description: "Learn React",
    id: 10
  }
];

const TodoList = () => {
  const todoList = todos.map(todo => <TodoItem todo={todo} key={todo.id} />);

  return <ul>{todoList}</ul>;
};
export default TodoList;
