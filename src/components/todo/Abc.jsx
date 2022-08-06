import React, { useState } from "react";
export const Abc = () => {
  const [textValue, setTextValue] = useState("");
  console.log(textValue);
  const handleInput = (e) => {
    let value = e.target.value;
    setTextValue(value);
  };
  return (
    <div>
      <label>Textbox2</label>
      <input onChange={handleInput} type="text"></input>
    </div>
  );
};
