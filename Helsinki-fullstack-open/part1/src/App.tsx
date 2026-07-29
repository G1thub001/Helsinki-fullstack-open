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
  part1: PartProps
  part2: PartProps
  part3: PartProps
}
function Content({part1, part2, part3}: ContentProps) {
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
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
  const course = "Half stack application development"
  const part1={
    name: "Fundamental of React",
    exercises: 10
  }
  const part2={
    name: "Using props to pass data",
    exercises: 7
  }
  const part3={
    name: "State of a component",
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2}
        part3={part3}
       />
      <Total 
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  )
}

  


export default App



