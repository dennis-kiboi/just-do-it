import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(description);

    const newTodo = {
      isComplete: false,
      description: description,
      id: 15
    };

    addTodo(newTodo);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter New Todo"
        name="description"
        value={description}
        onChange={e => {
          setDescription(e.target.value);
        }}
        required
      />
    </form>
  );
};
export default NewTodoForm;
