import { useState } from "react"
import course from "./data/course"


const Header = ({name}) => {
  return <h1>{name}</h1>

}

const Part = ({name, exercises}) =>{
  return <p>{name} {exercises}</p>
}

const Content = ({parts}) =>{
  const listParts = parts.map(part=><Part {...part}/>)
  return(
    <div>
      {listParts}
    </div>
  )

}



const Total = ({parts}) => {
  let sum = parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const Display = ({counter}) => <h1>{counter}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>




const App = () => {
  const [counter, setCounter] = useState(0)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })


  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />         

      <Header {...course} />
      <Content {...course}/>
      <Total {...course} />
    </div>
  )
}

export default App
