const Course = ({courses}) =>{
  console.log(courses)
  return(
    <>
      {courses.map(course=><div key={course.id}>
          <h1>{course.name}</h1>
            <ul>
              {course.parts.map(part=> 
              <li key={part.id}>
                {part.name} {part.exercises}
              </li>
              )}
              <li>total of {course.parts.reduce((total, part)=> total+part.exercises, 0)} exercises</li>
        </ul>
      </div>)}
      
    </>
  )
}

export default Course