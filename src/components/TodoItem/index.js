import React from "react";

const TodoItem = ({ data }) => {
  return (
    <div>
      <input type="checkbox" />
      {data.title}
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
