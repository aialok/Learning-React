import { useEffect, useState } from "react";
import { ToDoProvider } from "./Context";
import {ToDoForm,ToDoItem} from './components/index.js'

export default function App() {
  const [todos, settodos] = useState([]);

  const addToDo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevToDo) => {
        if (prevToDo.id === id) {
          return todo;
        } else {
          return prevToDo;
        }
      })
    );
  };

  const deleteToDo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    settodos((prev) =>
      prev.map((prevToDo) => {
        if (prevToDo.id == id) {
          return {
            ...prevToDo,
            completed: !prevToDo.completed,
          };
        }

        return prevToDo;
      })
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <ToDoProvider
      value={{ todos, addToDo, deleteToDo, toggleCompleted, updateToDo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
              <ToDoForm/> 
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <ToDoItem todo={todo}/>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}
