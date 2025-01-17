import React, { useState } from "react";

function InputComponent({ onInputChange }) {
  return <input type="text" onChange={(e) => onInputChange(e.target.value)} />;
}

function DisplayComponent({ value }) {
  return <div>{value}</div>;
}
const Day10 = () => {
  const [inputvalue, setinputvalue] = useState("");
  return (
    <div>
      <InputComponent onInputChange={setinputvalue} />
      <DisplayComponent value={inputvalue} />
    </div>
  );
};

export default Day10;
