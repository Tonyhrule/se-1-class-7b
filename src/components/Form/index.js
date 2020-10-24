import React from "react";

const Form = ({ inputValue, handleChange, handleSubmit }) => {
  return (
    <div>
      <input onChange={handleChange} value={inputValue} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
