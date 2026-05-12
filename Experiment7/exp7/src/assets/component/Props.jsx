import React from "react";

function Props({ name, course, marks }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

export default Props;