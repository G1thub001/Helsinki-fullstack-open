type HeaderProps = {
  course: string
}
function Header({course}: HeaderProps) {
  return  <h1>{course}</h1> 
}

type PartProps = {
  name: string
  exercises: number
}
function Part({name, exercises}: PartProps) {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

type ContentProps = {
  parts: PartProps[]
}
function Content({parts}: ContentProps) {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

type TotalProps = {
    exercises1: number
    exercises2: number
    exercises3: number
}

function Total({exercises1, exercises2, exercises3}: TotalProps) {
  return (
    <p>
      number of exercises {exercises1 +exercises2 + exercises3}
    </p>
  )
}

function App() {
  
  const course= "Half stack application development" 

  const  parts= [
    {
      name: "Fundamental of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content 
       parts= {parts}
       />
      <Total 
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  )
}

  

export default App



  



