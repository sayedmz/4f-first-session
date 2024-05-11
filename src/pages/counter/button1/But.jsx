import { Button } from "@mui/material";
import React, { useState } from "react";

const But = () => {
  const [color, setColor] = useState("success");
  const changeColor = () => {
    if (color === "success") setColor("warning");
    if (color === "warning") setColor("error");
    if (color === "error") setColor("success");
  };
  const [color1, setColor1] = useState("success");
  const changeColor1 = () => {
    setColor1(
      color1 === "success"
        ? "warning"
        : color1 === "warning"
        ? "error"
        : "success"
    );
  };
  const [color2, setColor2] = useState("success");
  const changeColor2 = () => {
    setColor2((previousColor) =>
      previousColor === "success"
        ? "warning"
        : previousColor === "warning"
        ? "error"
        : "success"
    );
  };
  return (
    <div>
      <Button variant="contained" color={color} onClick={changeColor}>
        {color}
      </Button>
      <br /> <br />
      <Button variant="contained" color={color1} onClick={changeColor1}>
        {color1}
      </Button>
      <br /> <br />
      <Button variant="contained" color={color2} onClick={changeColor2}>
        {color2}
      </Button>
    </div>
  );
};

export default But;
