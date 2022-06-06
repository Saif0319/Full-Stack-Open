import Header from "./Header"
import Part from "./Part"
import Total from "./Total"
import Content from "./Content"


const Course = ({course}) => {
    return ( 
    <div>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
  </div>
    )
}

export default Course
