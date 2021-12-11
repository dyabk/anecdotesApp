import React, { useState } from 'react'

const Button = (props) =>
  <button onClick = {props.handleClick}>{props.text}</button>

const Header = (props) =>
  <h1>{props.text}</h1>

const Paragraph = (props) =>
  <p>{props.text} {props.value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback"/>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics"/>
        <Paragraph text="good" value={good} />
        <Paragraph text="neutral" value={neutral} />
        <Paragraph text="bad" value={bad} />
    </div>
  )
}

export default App