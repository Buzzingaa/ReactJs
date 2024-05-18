import React, {useState} from 'react'

export default function Textform(props) {
    
    const[text,setText]=useState("enter your text here");
    let upperText= text.toUpperCase();
    const handelOnCLick = ()=> {
        console.log("you clicked the button");
        setText(upperText);
    }
    const handleOnChange = (event)=> {
        console.log("onChange");
        setText(event.target.value);
    }
  return (
<div>
    <h2>{props.title}</h2>
    <div className="mb-3" >
    <textarea className="form-control " id="myBox" rows="4"  value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary my-3" onClick={handelOnCLick}>convert to uppercase</button>
    </div>
    </div>
  );
}
