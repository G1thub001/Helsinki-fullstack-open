type HeaderProps = {
  course: string
}
function Header({course}: HeaderProps) {
  return  <h1>{course}</h1> 
}

type Partprops = {
  name: string
  exercises: number
}
function Part({name, exercises}: Partprops) {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

type Contentprops = {
  part1: string
  exercises1: number
  part2: string
  exercises2: number
  part3: string
  exercises3: number
}
function Content({part1, exercises1, part2, exercises2, part3, exercises3}: Contentprops) {
  return (
    <div>
      <Part name={part1} exercises={exercises1} />
      <Part name={part2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
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
  return (
    <div>
      <Header course={course} />
      <Content 
        part1="Fundamental  of React" 
        exercises1={10}
        part2="Using props to pass data"
        exercises2={7}
        part3="State of a component"
        exercises3={14}
       />
      <Total 
        exercises1={10}
        exercises2={7}
        exercises3={14}
      />
    </div>
  )
}

  


export default App



