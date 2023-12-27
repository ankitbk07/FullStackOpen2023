import { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;
  const positive = good / total;
  const average = (good - bad) / total;
  return (
    <div>
      {total ? (
        <>
          <h1>statistics</h1>
          <table>
            <tbody>
          <StatisticsLine text="good " value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />

            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}

const StatisticsLine = ({ text, value })=>{
  return (
    <>
      <tr>
        <td>{text}</td>
        <td> {value}</td>
      </tr>
    </>
  );
}

const Button = ({text,handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
        }}
        text="Good"
      />

      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
        }}
        text="Neutral"
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
        }}
        text="Bad"
      />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
