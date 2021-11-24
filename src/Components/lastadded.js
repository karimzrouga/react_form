import React from "react";

function Lastadded({ contact ,remove}) {
  let { gender, nom, age, opt, datein } = contact;
  return (
    
    <div>
    <h1>Last added</h1>
      
    <table>
      <th> gender: {gender} |name: {nom}|age:{age}|dream:{opt}|date: {datein}</th>
    </table>
      <hr/>
    </div>
  );
}
export default Lastadded;
