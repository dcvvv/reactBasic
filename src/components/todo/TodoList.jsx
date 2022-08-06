import React, { useState } from "react";

export const TodoList = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [notes, setNotes] = useState("");

  const handleCheckBox = () => {
    if (isCheck === true) {
      setIsCheck(false);
    } else {
      setIsCheck(true);
    }
  };

  const handleInput = (value, value2) => {
    console.log("value2", value2);
    setNotes(value);
  };
  console.log("checkbox", isCheck);
  console.log("note", notes);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "red",
      }}
    >
      <div>
        <input onClick={handleCheckBox} type="checkbox"></input>
        <label>something need to do</label>
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>notes</label>
        <input
          onChange={(e) => handleInput(e.target.value, "value 2")}
          type="text"
        ></input>
      </div>
    </div>
  );
};
