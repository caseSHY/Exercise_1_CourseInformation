import { useState } from "react";
const Table = ({ good, neutral, bad }) => {
  return (
    <table>
      <TableRow text="Good" value={good} />
      <TableRow text="Neutral" value={neutral} />
      <TableRow text="Bad" value={bad} />
      <TableRow text="All" value={good + neutral + bad} />
      <TableRow
        text="Average"
        value={((good - bad) / (good + neutral + bad)).toFixed(2)}
      />
      <TableRow
        text="Positive"
        value={`${((good / (good + neutral + bad)) * 100).toFixed(2)}%`}
      />
    </table>
  );
};
const TableRow = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral, bad);
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <h1>No feedback given</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <h1>Statistics</h1>
        <Table good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
};
export default App;
