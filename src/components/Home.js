import Footer from "./Footer";
import Header from "./Header";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <NewTodoForm />
        <TodoList />
      </main>
      <Footer />
    </div>
);
};
export default Home;
