import Header from './components/header.jsx'
import Content from "./components/content.jsx"
import Total from './components/total.jsx';
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];


  return (
    <div>
      <Header title={course} />
      <Content part={parts} />
      <Total part = {parts} />
    </div>
  );
  
}

export default App