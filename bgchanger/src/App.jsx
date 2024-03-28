import React, {useState} from "react";

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

// const TextComponent = () => {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// };

const WrapperComponent = ({ children }) => {
  console.log(children);
  return (
    <div key={children.index} className="border-2 border-blue-500">
      {children}
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    // Add more tasks here if needed
  ]);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
      <ul className="divide-y divide-gray-300">
        {tasks.map((task) => (
          <li key={task.id} className="py-2 flex items-center justify-between">
            <span className="text-lg">{task.text}</span>
            <button
              className="text-red-600"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
