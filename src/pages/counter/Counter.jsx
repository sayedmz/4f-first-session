import { Button } from "@mui/material";
import React, { useState } from "react";
import Header from "../../layout/header/Header";
import { ButtonColor } from "./button/ButtonColor";
import But from "./button1/But";
const Counter = () => {
  const [value, setValue] = useState(5);

  const [color, setColor] = useState("blue");
  const increaseHandler = () => setValue((previousValue) => previousValue + 1);
  const increase10TimesHandler = () => setValue(value + 10);
  const decreaseHandler = () => {
    setValue(value - 1);
  };
  const inputHandler = (event) => {
    setValue(+event.target.value);
  };
  const colorHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Header />
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            gap: "10px",
          }}
        >
          the number is :<strong> {value}</strong>
          <Button
            variant="contained"
            size="small"
            onClick={increaseHandler}
            sx={{ backgroundColor: color }}
          >
            +1
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={increase10TimesHandler}
            sx={{ backgroundColor: color }}
          >
            +10
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={decreaseHandler}
            sx={{ backgroundColor: color }}
          >
            -1
          </Button>
          <input type="number" onChange={inputHandler} value={value} />
          <input type="checkbox" />
          <input type="date" />
          <input type="color" onChange={colorHandler} value={color} />
        </main>
        <br />
        <p>
          <ButtonColor />
        </p>
        <p>
          <ButtonColor />
        </p>
        <p>
          <ButtonColor />
        </p>
        <p>
          <But />
        </p>
      </header>
    </>
  );
};

export default Counter;
