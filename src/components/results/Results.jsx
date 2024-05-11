import React from "react";
import "./Results.scss";
import { calculateInvestmentResults, formatter } from "../../utils/investment";

function Results(props) {
  const { userInput } = props;
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData?.[0]?.valueEndOfYear -
    resultsData?.[0]?.interest -
    resultsData?.[0]?.annualInvestment;
  // if (userInput.duration <= 0) {
  //   return (
  //     // من اجل ان نجعل الوقت دائما في حالة صحيحة واذا كان هناك خطا يتم التنبيه
  //     <div className="center">please enter a duration greater than zero</div>
  //   );
  // }
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
            const totalInterest =
              yearData?.valueEndOfYear -
              yearData?.annualInvestment * yearData?.year -
              initialInvestment;
            const InvestedCapital = yearData?.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData?.valueEndOfYear)}</td>
                <td>{formatter.format(yearData?.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(InvestedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
