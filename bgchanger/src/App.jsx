import React from "react";

function App() {
  return (
    <div>
      {/* <WrapperComponent >
        <h1>hello world</h1>
        <p>How are u doing?</p>
      </WrapperComponent> */}
      <WrapperComponent>
        <h1>hello world</h1>
        <WrapperComponent>
          <h1>hello world</h1>
          <p>How are u doing?</p>
        </WrapperComponent>
        <p>How are u doing?</p>
      </WrapperComponent>
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

export default App;
