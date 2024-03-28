import React, { useState } from "react";
import ToDo from "./components/ToDo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "Learn React",
      description: "Learn how to use React",
      completed: false,
    },
    {
      title: "Learn Vite",
      description: "Learn how to use Vite",
      completed: false,
    },
    {
      title: "Learn Tailwind",
      description: "Learn how to use Tailwind",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState('off');

  const onChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "completed") {
      console.log(value);
      if(value === "on")
      {
        value = "off";
      }
      else{
        value = "on";
      }

      e.target.value = value;
      setCompleted(value);
    }
  };

  const AddToDo = () => {
    const newTodo = {
      title: title,
      description: description,
      completed: completed,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
       <div>
        <input
          type="text"
          name="title"
          id=""
          className="border-2"
          onChange={onChange}
        />
        <input
          type="text"
          name="description"
          id=""
          className="border-2"
          onChange={onChange}
        />
        <input
          type="radio"
          name="completed"
          id=""
          className="border-2"
          onChange={onChange}
          onClick={onChange}
        />
        <button className="bg-green-300 border-2" onClick={AddToDo}>
          Add
        </button>
      </div>
      <h1 className="text-3xl font-bold underline text-center">To Do List</h1>
      {todos.map((todo, index) => (
        <ToDo
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
     
    </div>
  );
}

// function AddToDo() {
//   const [todo, setTodo] = useState("");

//   const onChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const AddToDo = () => {
//     console.log(todo);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         name=""
//         id=""
//         className="border-2"
//         onChange={onChange}
//       />
//       <button className="bg-green-300 border-2" onClick={AddToDo}>
//         Add
//       </button>
//     </div>
//   );
// }
