import { useState } from 'react'

import Course from './Course'

function App() {

const [persons, setPersons] = useState([{name: 'Arto Hellas', number: '040-123456'}])

const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const [search, setSearch] = useState('')

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(event.target.value)
} 


const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()



    const alreadyExists= persons.some( 
    person => person.name === newName
  )

  if(alreadyExists) {
    alert(`${newName} is already added to phonebook`)
      return
  }
  const newPerson = {
    name: newName,
    number: newNumber,
  }

  setPersons(persons.concat(newPerson))
  setNewName('')
  setNewNumber('')
}

const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
  setNewNumber(event.target.value)
}
const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setNewName(event.target.value)
}
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const personsToShow = persons.filter((person) => 
    person.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
       {
   courses.map((course) => (
    <Course key={course.id} course={course} />
  ))
  }

  <form onSubmit={addPerson}>
    <div>
    <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      <input value = {newNumber} onChange={handleNumberChange} />
    </div>
    <div> 
      <input value={search} onChange={handleSearchChange} />
    </div>
    <button type="submit">add</button>
  </form>

  <ul>  
    {personsToShow.map((person) => (
      <li key={person.name}>
        {person.name} {person.number}</li>
     
    ))}
  </ul>
 
   </div>
  )
}

export default App  



