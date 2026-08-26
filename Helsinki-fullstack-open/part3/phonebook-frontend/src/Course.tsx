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

export default Course