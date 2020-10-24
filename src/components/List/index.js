import React from "react";
import TodoItem from "../TodoItem";

const List = ({ todos }) => {
  return (
    <div>
      {todos.map((v) => (
        <TodoItem data={v} />
      ))}
    </div>
  );
};

export default List;
