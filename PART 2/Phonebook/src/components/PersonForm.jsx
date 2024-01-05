import { useState } from "react";
const PersonForm = ({ persons,handlePersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already in the list`);
    } else {
      const nameObject = { name: newName, number: newNumber };
      handlePersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          value={newName}
        />
      </div>
      <div>
        number:{" "}
        <input
          onChange={(event) => setNewNumber(event.target.value)}
          type="number"
          value={newNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
