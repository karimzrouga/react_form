import FormularComponent from "../Components/FormularComponent";
import "../Styles/App.css";
import { useState } from "react";
import { Contactlist } from "../Components/ContactListComponent";
import Preview from "../Components/Preview";
import Lastadded from "../Components/lastadded";
function App() {
  let data = {
    nom: "",
    age: 0,
    datein: Date,
    opt: "",
    gender: "Mr",
    changed: false,
  };
  const [state, setState] = useState(data);
  const [contacts, setcontacts] = useState([]);
  let handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
 
  /************************************************ */
  let handleSubmit = (event) => {
    event.preventDefault();
    var intvalue = contacts.length ;
    setcontacts((oldlist) => [...oldlist, { ...state, id:intvalue }]);
    console.log("test");
    console.log(contacts);
    setState({ ...state, changed: true });

  };
  let remove = (myid) => {
    setcontacts(contacts.filter((elt) =>
      elt.id !== myid));
  };
  /****************************************************************************************** */
  return (
    <div>
      <div class="row">
  <div class="column">
    <div class="card"> 
    {state.changed ? <Lastadded contact={state}  /> : null}

     <FormularComponent
        pstate={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    
      {state.changed ? <Preview contact={state}  /> : null}</div>
  </div>
  
  <div class="column">
    <Contactlist list={contacts} remove={remove} />
</div>
  </div>

    </div>
  );
}

export default App;
