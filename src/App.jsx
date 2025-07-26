import { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
   
  const [selected, setSelected] = useState(0)

  const handleVote = (votes, selected) => {
    const newVotes = votes.map((vote, index) =>{
      if(index===selected){
        return vote+1;
      }
      return vote;
    })
    setVotes(newVotes)
  }

  const handleNext = () => {
    let max = 7;
    let min = 0;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    setSelected(random)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={()=>handleVote(votes, selected)}>vote</button>
      <button onClick={()=>handleNext()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>this has {votes.join(' ')}</p>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}

export default App