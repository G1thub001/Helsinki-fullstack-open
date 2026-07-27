
function Header({course}) {
  return  <h1>{course}</h1> 
}

function Part({name, exercises}) {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

function App() {
  const course = "Half stack application development"
  return (
    <div>
      <Header course={course} />
      <Part 
      name= "Fundamental  of React" 
      exercises={10}
       />
      <Part 
      name = "Using props to pass data"
      exercises={7} 
      />
      <Part 
      name = "State of a component"
      exercises={14} 
      />
    </div>
  )
}
export default App
