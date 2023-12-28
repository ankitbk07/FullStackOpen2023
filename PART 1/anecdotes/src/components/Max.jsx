const Max = ({ vote, anecdotes }) => {
  const maxIndex = [...vote].reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);
  console.log(maxIndex)
  return (
      <div>
      <h1>Anecdotes with the largest vote</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {vote[maxIndex] } votes</p>
      

    </div>
  )
}

export default Max