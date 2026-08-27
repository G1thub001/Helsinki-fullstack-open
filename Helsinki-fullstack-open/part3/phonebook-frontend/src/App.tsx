import { useState, useEffect } from 'react'

import Course from './Course'
import  Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'

type Person = {
  name: string
  number: string
  _id: string
}
function App() {

const [persons, setPersons] = useState<Person[]>([])

const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')
const [search, setSearch] = useState('')

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(event.target.value)
} 

const addPerson = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const newPerson = {
  name: newName,
  number: newNumber
}

    const alreadyExisting= persons.find( 
    person => person.name === newName
  )

  if(alreadyExisting) {
       personService
       .update(alreadyExisting._id, newPerson)
       .then(response =>{
        setPersons(
          persons.map(person => 
            person._id===alreadyExisting._id
            ? response.data
            : person
          )
        )
       })
  }

  else{
    personService
    .create(newPerson)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    }
    )

  }


}

const handleDelete= (id: string) =>
  personService
  .remove(id)
  .then(()=>{setPersons(persons.filter(person=> person._id !==id))}) 

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



  useEffect(() => {
  personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
}, [])
  return (
    <div>
       {
   courses.map((course) => (
    <Course key={course.id} course={course} />
  ))
  }

  <Filter 
   search={search} 
   handleSearchChange={handleSearchChange} 
   />
  <PersonForm 
    newName= {newName}
    newNumber= {newNumber}
    handleNameChange={handleNameChange}
    handleNumberChange={handleNumberChange}
    addPerson= {addPerson}
     />
  
 <Persons personsToShow={personsToShow} onDelete= {handleDelete} />

    </div>
  )

}
export default App  



