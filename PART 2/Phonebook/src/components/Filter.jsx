import { useState } from "react";

const Filter = ({persons}) => {
    const [findName, setFindName] = useState("");
    
    
    return (
      <div>
        filter shown with{" "}
        <input
          onChange={(event) => setFindName(event.target.value)}
          value={findName}
        />
        {persons.map((person) => {
            const firstName = person.name.split(" ")[0]
            
          const searchName = findName.charAt(0).toUpperCase() + findName.slice(1);
          
          const lowFirstName = firstName.toLowerCase()

          if (firstName === searchName || lowFirstName === findName) {
            return <p key={person.name}>{ person.name } { person.number }</p>
            }
        })}
      </div>
    );
}

export default Filter