import React, { useState } from 'react'

const Button = (props) =>
  <button onClick = {props.handleClick}>{props.text}</button>

const Header = (props) =>
  <h1>{props.text}</h1>

const Line = (props) =>
  <p>{props.text} {props.value}</p>

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  
  return (
    <div>
      <Header text="statistics" />
        <Line text="good" value={good} />
        <Line text="neutral" value={neutral} />
        <Line text="bad" value={bad} />
        <Line text="all" value={all} />
        <Line text="average" value={average} />
        <Line text="positive" value={positive*100 + " %"} />
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