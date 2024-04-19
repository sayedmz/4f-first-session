import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./InvestmentCalculator.scss";
import InvestmentHeader from "../../layout/investmentHeader/InvestmentHeader";
import UserInputs from "../../components/userInput/UserInputs";
import Results from "../../components/results/Results";

export const InvestmentCalculator = () => {
  const [userInput, setUserInput] = useState({
    initialInvestments: 1000,
    annualInvestments: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const changeHandler = (e, inputIdentifier) =>
    setUserInput((prev) => ({ ...prev, [inputIdentifier]: +e.target.value }));

  return (
    <div className="InvestmentCalculator">
      <Button component={Link} to="/">
        Back
      </Button>
      <InvestmentHeader />
      <UserInputs userInput={userInput} onChange={changeHandler} />
      <Results userInput={userInput} />
    </div>
  );
};
