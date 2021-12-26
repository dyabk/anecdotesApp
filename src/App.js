import React, { useState } from 'react'

const Additional = ({anecdotes, max, votes}) => {
  if (max > -1) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[max]}<br />
        has {votes[max]} votes
      </div>
    )
  }
  else return <div>No feedback is given yet.</div>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState([0, -1])
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  console.log('selected state: ' + selected)
  console.log('votes state: ' + votes)

  const max = Math.max(...votes)
  const index = votes.indexOf(max)
  if ((selected[1] === -1 && max > 0) || (max > votes[selected[1]] )) {
    setSelected([selected[0], index])
  }

  const generateRandom = () => {
    const result = Math.floor( Math.random() * anecdotes.length )
    if (result === selected[0]) {
      console.log('re-calculating new selected state...')
      return generateRandom()
    }
    return result
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected[0]] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected[0]]}<br />
        has {votes[selected[0]]} votes<br />
        <button onClick={() => vote()}>vote</button>
        <button onClick={() => setSelected([generateRandom(), selected[1]])}>next anecdote</button>
      </p>
      <Additional anecdotes={anecdotes} max={selected[1]} votes={votes} />
    </div>
  )
}

export default App