const Total = (props) => {
    return (
      <p>
        Number of exercise is {""}
        {props.part[0].exercises +
          props.part[1].exercises +
          props.part[2].exercises}
      </p>
    );
}

export default Total