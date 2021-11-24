import React from "react";

function Contact({ contact ,rm}) {
  let { gender, nom, age, opt, datein,id } = contact;
  return (
    
    <div>
     
      <p> gender: {gender}</p>
      <p> name: {nom}</p>
      <p> age:{age}</p>
      <p> dream:{opt}</p>
      <p> date: {datein}</p>
      {
        id>-1? <button  onClick={()=>rm(id)}>remove</button> :null
      }
      <hr/>
    </div>
  );
}
export default Contact;
