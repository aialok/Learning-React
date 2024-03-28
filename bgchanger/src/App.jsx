import React, { useState } from "react";

export default function App() {
  const [heading, setHeading] = useState(123);
  const randomValue = () => {
    setHeading(Math.floor(Math.random() * 100));
  };

  return (
    <div className="flex flex-col justify-center ">
      <button
        className="border-2 bg-blue-200 border-blue-100"
        onClick={randomValue}
      >
        Change Heading
      </button>
      {/* <HeaderWithButton /> */}
      <Header title={heading} />
      <Header title="Bye World" />
      <Header title="Bye World" />
      <Header title="Bye World" />
    </div>
  );
}

// function HeaderWithButton() {
//   const [heading, setHeading] = useState(123);
//   const randomValue = () => {
//     setHeading(Math.floor(Math.random() * 100));
//   };
//   return (
//     <div>
//       <Header title={heading}></Header>
//       <button onClick={randomValue}>Click me</button>
//     </div>
//   );
// }

const Header = React.memo(function Header({ title }) {
  return <div>Hey this is {title}</div>;
});
