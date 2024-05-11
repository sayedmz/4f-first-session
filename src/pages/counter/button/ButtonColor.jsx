import React from "react";
import { useState } from "react";

export const ButtonColor = () => {
  const [color, setColor] = useState("red");
  const handleColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )} ,${Math.floor(Math.random() * 256)})`;
    setColor(randomColor);
  };

  return (
    <div>
      <button
        id="buttonColor1"
        onClick={handleColor}
        style={{ backgroundColor: color }}
      >
        Click to change color
      </button>
    </div>
  );
};
