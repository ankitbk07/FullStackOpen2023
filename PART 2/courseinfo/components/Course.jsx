import Header from "./Header"
import Content from "./Content"
const Course = ({course}) => { 
    console.log(course)
    return (
        <div className="course">
            <Header course={course.name} />
            <Content part={course.parts} />

        </div>
  )
}

export default Course