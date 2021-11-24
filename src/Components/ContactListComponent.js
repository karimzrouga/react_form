import Contact from "../Components/Contact";
import "../Styles/App.css";
export function Contactlist(props) {
  const mylist = props.list;
  var len=mylist.length;

  return (
  
    <div class="card"> {
        len ===0 ? null :
        <div >
            <h2>list contact</h2> 
      {mylist.map((elt) => (
       
        <Contact contact={elt} key={elt.id} rm={props.remove} />
      ))}
        </div>
      }</div>

   
  );
}
