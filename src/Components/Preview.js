import React from "react";

function Preview({ contact ,remove}) {
  let { gender, nom, age, opt, datein } = contact;
  return (
    
    <div>
    <h1>Preview</h1>
      <p> gender: {gender}</p>
      <p> name: {nom}</p>
      <p> age:{age}</p>
      <p> dream:{opt}</p>
      <p> date: {datein}</p>
    
      <hr/>
    </div>
  );
}
export default Preview;
