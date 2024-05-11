import React from "react";
import "./UserInputs.scss";

const UserInputs = (props) => {
  const { onChange, userInput } = props;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange(e, "initialInvestment")}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENTS</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange(e, "annualInvestment")}
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange(e, "expectedReturn")}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange(e, "duration")}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInputs;
