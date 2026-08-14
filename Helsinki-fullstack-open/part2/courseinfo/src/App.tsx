import { useState } from 'react'

import Course from './Course'

function App() {

const [persons, setPersons] = useState([{name: 'Arto Hellas'}])

const [newName, setNewName] = useState('')
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
  }

  setPersons(persons.concat(newPerson))
  setNewName('')
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

  return (
    <div>
       {
   courses.map((course) => (
    <Course key={course.id} course={course} />
  ))
  }

  <form onSubmit={addPerson}>
    <input value={newName} onChange={handleNameChange} />
    <button type="submit">add</button>
  </form>

  <ul>  
    {persons.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
  </ul>

    </div>
  )
}

export default App  



