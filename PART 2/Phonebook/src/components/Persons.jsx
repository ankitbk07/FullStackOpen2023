const Persons = ({names}) => {
    console.log(names)
    return (
    <div>
            {names.map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
            
    </div>
    )
}

export default Persons