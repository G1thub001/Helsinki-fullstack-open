

 type HeadingProps= {
  heading: string
 }
 
function Header({heading}: HeadingProps) {
  return <h1>{heading}</h1>

}


type Part = {
  id: number
  name: string
  exercises: number
}
type PartProps = {
  part: Part
  }

function Part({part}: PartProps) {
return ( 
  <h1>
{part.name} {part.exercises}
  </h1>
)
}

type Course = {
  name: string
  parts: Part[]
}
type CourseProps = {
  course: Course
}
function Course({course}: CourseProps) {
  return (
    <div>
      <Header heading={course.name} />
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={course.parts} />
    </div>
  )
 
}
type TotalProps = {
  parts: Part[]
}
function Total({ parts }: TotalProps) {
  const total=
  parts[0].exercises+
  parts[1].exercises+
  parts[2].exercises
  return (
    <p>Number of exercises {total}</p>
  )
}

function App() {
  const course = {
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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App  