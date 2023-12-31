import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  
  const handlePersons = (data) => setPersons(data)


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons = {persons} />
      <h2>Add a new</h2>
      <PersonForm persons = {persons} handlePersons = {handlePersons} />
      <h2>Numbers</h2>
      <Persons names={persons} />
    </div>
  );
};

export default App;
