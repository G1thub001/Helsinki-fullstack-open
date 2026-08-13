

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
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <strong>  Total exercises: {total}</strong>
  )
}

function App() {
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
    </div>
  )
}

export default App  