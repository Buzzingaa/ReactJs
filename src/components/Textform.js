import React, {useState} from 'react'

export default function Textform(props) {
    
    const[text,setText]=useState("");
    let upperText= text.toUpperCase();
    const handelOnCLick = ()=> {
        console.log("you clicked the button");
        setText(upperText);
    }
    const handleOnChange = (event)=> {
        console.log("onChange");
        setText(event.target.value);
    }
    const handleLowClick=()=>{
      setText(text.toLowerCase())
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent == "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
          
          window.speechSynthesis.cancel()
         
      }
  }

   
   
    
  return (
    <>

<div style={{color:props.mode==='light'?'black':'white'}}>
    <h2>{props.title}</h2>
    <div className="mb-3" >
    <textarea className="form-control " style={{backgroundColor:props.mode==='light'?'white':'gray'}} id="myBox" rows="4"  value={text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary my-3" onClick={handelOnCLick}>convertToUppercase</button>
    <button className="btn btn-secondary my-3 mx-3" onClick={(handleLowClick)}>convertToLowercase</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>

    </div>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008*text.split(" ").length } minute read</p>
      <h2>Priview</h2>
      <p>{text==''?'write the text above to see priview':text}</p>

    </div>
    
    </>
  );
}
