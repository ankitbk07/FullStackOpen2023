import Part from './Part.jsx'
const Content = (props) => {
    return (
      <div>
        <Part part={props.part[0].name} exercise={props.part[0].exercises} />
        <Part part={props.part[1].name} exercise={props.part[1].exercises} />
        <Part part={props.part[2].name} exercise={props.part[2].exercises} />
      </div>
    );
}

export default Content