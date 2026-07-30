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
  
  const course= {
    name: "Half stack application development",

   parts: [
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
  }
  return (
    <div>
      <Header course={course.name} />
      <Content 
       parts= {course.parts}
       />
      <Total 
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
    </div>
  )
}

  

export default App



  



