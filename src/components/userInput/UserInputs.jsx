import React, { useState } from "react";
import "./UserInputs.scss";

const UserInputs = () => {
  const [userInput, setUserInput] = useState({
    initialInvestments: 1000,
    annualInvestments: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const changeHandler = (e, inputIdentifier) =>
    setUserInput((prev) => ({ ...prev, [inputIdentifier]: e.target.value }));

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestments}
            onChange={(e) => changeHandler(e, "initialInvestments")}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENTS</label>
          <input
            type="number"
            required
            value={userInput.annualInvestments}
            onChange={(e) => changeHandler(e, "annualInvestments")}
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => changeHandler(e, "expectedReturn")}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => changeHandler(e, "duration")}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInputs;
