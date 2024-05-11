import React, { useState } from "react";

export const SyncedInputs1 = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const handleValue = (event) => {
    const newValue = event.target.value;
    setValue1(newValue);
    setValue2(newValue);
  };
  return (
    <div>
      <h2>seconde methoe</h2>
      <label>first input</label>
      <input type="text" value={value1} onChange={handleValue} />
      <label>seconde input</label>
      <input type="text" value={value2} onChange={handleValue} />
    </div>
  );
};
