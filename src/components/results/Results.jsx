import React from "react";
import "./Results.scss";
import { calculateInvestmentResults, formatter } from "../../utils/investment";

function Results(props) {
  const { userInput } = props;
  const resultsData = calculateInvestmentResults(userInput);
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>interest (Year)</th>
            <th>Total interest</th>
            <th>invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(yearData.annualInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
