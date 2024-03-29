import { useCallback, useEffect, useMemo, useState } from "react";
import React from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // const a = useCallback(() => {
  //   return { b: 1 };
  // }, []);
  const a = () => {
    return { b: 1 };
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Demo a={a} />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => setCounter(counter + 1)}
      >
        Counter {counter}
      </button>
    </div>
  );
}

const Demo = React.memo(function Demo({ a }) {
  console.log(a());
  return <div>This is Demo</div>;
});

// function App() {
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState(0);
//   // const [sum, setSum] = useState(0);

//   // useEffect(()=>{
//   //   let sum = 0;
//   //   for (let i = 1; i <= inputValue; i++) {
//   //     sum += i;
//   //   }
//   //   setSum(sum);
//   //   console.log("sum", sum);

//   // }, [inputValue])

//   let sum = useMemo(() => {
//     let sum = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       sum += i;
//     }

//     console.log("sum", sum);
//     return sum;
//   }, [inputValue]);

//   return (
//     <div className="flex flex-col justify-center w-48 ">
//       <input
//         className="border-2"
//         onChange={(e) => {
//           setInputValue(Number(e.target.value));
//         }}
//         type="number"
//         value={Number(inputValue)}
//       />
//       <br />
//       Sum of 1-{inputValue} is {sum}
//       <br />
//       <button
//         className="  text-black-500"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Count {count}
//       </button>
//     </div>
//   );
// }

const TextComponent = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

const WrapperComponent = ({ children }) => {
  console.log(children);
  return (
    <div key={children.index} className="border-2 border-blue-500">
      {children}
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("1");
  const [buttonValue, setButtonValue] = useState("1");

  console.log("Renders");

  useEffect(() => {
    let didCancel = false;
    console.log(buttonValue);

    function fetchMyAPI() {
      fetch(`https://jsonplaceholder.typicode.com/todos?id=${buttonValue}`)
        .then((response) => response.json())
        .then((data) => {
          if (!didCancel) {
            console.log(data);
            setTasks(data);
          }
        });
    }
    fetchMyAPI();

    return () => {
      didCancel = true;
    };
  }, [buttonValue]);

  const onChangeFun = (e) => {
    setInputValue(e.target.value);
  };

  const onClickFun = (e) => {
    console.log(e.target.textContent);
    setButtonValue(e.target.textContent);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
      <input
        className="border-4 border-black"
        type="text"
        name=""
        id=""
        onChange={onChangeFun}
      />
      <br />
      <button onClick={onClickFun}>1</button>
      <br />
      <button onClick={onClickFun}>2</button>
      <br />
      <button onClick={onClickFun}>3</button>
      <br />
      <button onClick={onClickFun}>4</button>
      <ul className="divide-y divide-gray-300">
        {tasks.map((task) => (
          <li key={task.id} className="py-2 flex items-center justify-between">
            <span className="text-lg">{task.title}</span>
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
