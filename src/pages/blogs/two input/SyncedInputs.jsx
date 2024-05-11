import { useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h2>first method</h2>
      <Input x={handleChange} text={text} label="First input" />
      <Input x={handleChange} text={text} label="Second input" />
    </>
  );
}

function Input({ text, label, x }) {
  return (
    <label>
      {label} <input value={text} onChange={x} />
    </label>
  );
}
