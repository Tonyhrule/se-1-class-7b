import React, { useState } from "react";
import Form from "../Form";
import List from "../List";

const Todolist = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleSubmit = () => {
    if (inputValue === "") {
      alert("Input is empty");
    } else {
      const nextTodos = [...todos];
      nextTodos.push({ title: inputValue, isDone: false });
      setInputValue("");
      setTodos(nextTodos);
    }
  };
  return (
    <div>
      <List todos={todos} />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
    </div>
  );
};

export default Todolist;
