import Footer from "./Footer";
import Header from "./Header";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([
    // [state, setState]
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
  ]);

  // const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = id => {
    // iterate over the array and find the toggled todo
    // toggle it isComplete value
    // add it to a new array

    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
    });

    setTodos(newTodos);
  };

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <Header />
      <main>
        <NewTodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
