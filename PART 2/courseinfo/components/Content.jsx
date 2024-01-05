import Part from "./Part"
const Content = ({ part }) => {
    const total = part.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <>
        <Part parts={part} />  
            <h4>total of {total} exercises</h4>    
        </>
  )
}

export default Content