
const Header = ({name}) => {
  console.log(name)
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
  console.log(parts)
  console.log({parts})
  let sum = parts.reduce((total, part) => total + part.exercises, 0)
  return(
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header {...course} />
      <Content {...course}/>
      <Total {...course} />
    </div>
  )
}

export default App
