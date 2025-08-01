import { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if(persons.some(person=>person.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat({name: newName, number: newNumber, id:persons.length + 1}))
      setNewName('')
      setNewNumber('')

    }
  }

  

  


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons}/>

      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={e =>setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={e =>setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      

      <h2>Numbers</h2>
      <ul>
        {persons.map((person)=><li key={person.id}>
          {person.name} {person.number} {person.id}
        </li>)}
      </ul>
    </div>
  )
}

export default App