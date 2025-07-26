import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const Statistics = ({good, bad, neutral}) => {
  if(good==0 && bad==0 && neutral==0){
    return <p>No feedback given</p>
  }

  return(
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {good+neutral+bad}</p>
      <p>Average: {(good-bad)/(good+bad+neutral)}</p>
      <p>Positive: {good/(good+bad+neutral)}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={()=>setGood(good + 1)} text={'good'}/>
      <Button onClick={()=>setNeutral(neutral + 1)} text={'neutral'}/>
      <Button onClick={()=>setBad(bad + 1)} text={'bad'}/>


      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )
}

export default App