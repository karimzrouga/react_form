import React, { useEffect } from "react";

function FormularComponent(props) {
  useEffect(() => {
    localStorage.setItem("data",JSON.stringify(props.pstate));
  },[props.pstate]);
  return (
    <>
      <form className="form" handleChange={()=>{}}>
        Gender : MR
        <input
          type="radio"
          name="gender"
          value="MR"
          checked={props.pstate.selectedOption === "MR"}
          onChange={props.handleChange}
        />
        ME
        <input
          type="radio"
          name="gender"
          value="ME"
          checked={props.pstate.selectedOption === "ME"}
          onChange={props.handleChange}
        />
        <br />
        <br />
        name :
        <input
          type="text"
          name="nom"
          value={props.pstate.nom}
          onChange={props.handleChange}
        />{" "}
        <br />
        <br />
        age :
        <input
          type="number"
          name="age"
          value={props.pstate.age}
          onChange={props.handleChange}
        />{" "}
        <br /> <br />
        Date :
        <input
          type="date"
          name="datein"
          value={props.pstate.datein}
          onChange={props.handleChange}
        />{" "}
        <br />
        <br />
        dream country :
        <select value={props.pstate.opt} name="opt" onChange={props.handleChange}>
          <option value="please......">please......</option>
          <option value="FRA">FRA</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="TN">TN</option>1
        </select>
        <br />
        <input type="button" value="valider" onClick={props.handleSubmit} />
      </form>
      
    </>
  );
}

export default FormularComponent;
