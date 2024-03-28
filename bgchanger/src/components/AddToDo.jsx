import React, { useState } from "react";

function AddToDo() {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const AddToDo = () => {
    console.log(todo);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="border-2"
        onChange={onChange}
      />
      <button className="bg-green-300 border-2" onClick={AddToDo}>
        Add
      </button>
    </div>
  );
}

export default AddToDo;
