import React, { useState } from 'react'

const Button = (props) =>
  <button onClick = {props.handleClick}>{props.text}</button>

const Header = (props) =>
  <h1>{props.text}</h1>

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  
  if (good < 1 && bad < 1 && neutral < 1) {
    return (
      <div>
        <Header text="statistics" />
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
      <div>
        <Header text="statistics" />
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive*100 + " %"} />
          </tbody>
        </table>
      </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const setAdditional = (offset1, offset2) => {
    setAll(all + 1)
    setAverage( ( good - bad + offset1) / (all + 1) )
    setPositive( (good + offset2) / (all + 1) )
  }

  const changeBad = () => {
    setBad(bad + 1)
    setAdditional(-1, 0)
  }

  const changeGood = () => {
    setGood(good + 1)
    setAdditional(1, 1)
  }

  const changeNeutral = () => {
    setNeutral(neutral + 1)
    setAdditional(0, 0)
  }

  return (
    <div>
      <Header text="give feedback" />
        <Button handleClick={() => changeGood()} text="good" />
        <Button handleClick={() => changeNeutral()} text="neutral" />
        <Button handleClick={() => changeBad()} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )

}

export default App