import { useState } from "react"

const Filter = ({persons}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const filteredPersons = searchTerm === '' 
      ? persons
      : persons.filter(person=>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

    const handleSearchChange = (e) =>{
      setSearchTerm(e.target.value)

    }
    return(
      <>
        <div>filter shown with 
          <input value={searchTerm} onChange={handleSearchChange}/>
        </div>
        <ul>
          {filteredPersons.map((person)=><li key={person.id}>
            {person.name} {person.number} {person.id}
          </li>)}
        </ul>

      </>
      

    )
  }

export default Filter