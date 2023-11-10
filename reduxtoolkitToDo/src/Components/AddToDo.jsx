import React, { useEffect, useState } from "react";
import { addToDo, removeToDo, editToDo } from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function AddToDo() {
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const dispath = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!edit) dispath(addToDo(input));
    else {
      dispath(editToDo(input));
      setEdit(false)
    }

    setInput("");
  };

  useEffect(() => {
    todos.map((e) => {
      if (e.edit) {
        setEdit(true);
        setInput(e.text);
      }
    });
  }, [todos]);

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        name="add"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        disabled={input.length == 0 || edit}
      >
        Add Todo
      </button>
      <button
        type="submit"
        name="edit"
        className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        disabled={input.length == 0 || !edit}
      >
        Edit Todo
      </button>
    </form>
  );
}

export default AddToDo;
