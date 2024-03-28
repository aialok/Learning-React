import React from "react";

export default function ({ title, description, completed }) {
  return (
    <div>
      <h1 className="underline font-bold text-green-500">{title}</h1>
      <p>{description}</p>
      <button className="border-4 bg-red-300 border-red-300 ">{completed ? "Completed" : "Not completed"}</button>
    </div>
  );
}
