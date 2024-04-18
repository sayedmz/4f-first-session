import { Button } from "@mui/material";
import React, { useState } from "react";

export const AboutUs = () => {
  const [value, setValue] = useState(true);
  const buttonHandler = () => setValue(!value);
  //============================================
  const [value1, setValue1] = useState(true);
  const buttonHandler1 = () => setValue1((previousValue) => !previousValue);
  //============================================
  //  في حال استعمالنا فوكشن داخل سات فاليو نستطيع التعمالها على عدة مرات
  const [value2, setValue2] = useState(true);
  const buttonHandler2 = () => {
    setValue2((previousValue) => !previousValue); // ===> false
    setValue2((previousValue) => !previousValue); // ===> true  تبقى كما هي
  };
  return (
    <div>
      <p>AboutUs</p>
      {JSON.stringify(value)} <br />
      <Button
        color={value === true ? "success" : "error"}
        variant="contained"
        onClick={buttonHandler}
      >
        {value === true ? "success" : "error"} color
      </Button>
      <br />
      <br />
      {JSON.stringify(value1)} <br />
      <Button
        color={value1 === true ? "success" : "error"}
        variant="contained"
        onClick={buttonHandler1}
      >
        {value1 === true ? "success" : "error"} color
      </Button>
      <br />
      <br />
      {JSON.stringify(value2)} <br />
      <Button
        color={value2 === true ? "success" : "error"}
        variant="contained"
        onClick={buttonHandler2}
      >
        {value2 === true ? "success" : "error"} color
      </Button>
    </div>
  );
};
