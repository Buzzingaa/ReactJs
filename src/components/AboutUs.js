import React, { useState } from 'react'
export default function AboutUs(){
    const[MyStyle,setMyStyle]=useState({
        backgroundColor:'white',
        color:'dark'
    })
    const [btnText,setBtnText]=useState('darkmode')
    let togle= document.getElementById("toggle")
    const darkmoden=()=>{
        if(MyStyle.color==='black'){
            setMyStyle({
                backgroundColor:'black',
                color:'white'
            })
            setBtnText('lightmode')
            
        }
        
       else{
            setMyStyle({
                backgroundColor:'white',
                color:'black'
            })
            setBtnText('darktmode')
           

        }


    }




    
    return(
        <>
        <div className="accordion accordion-flush" id="accordionFlushExample"  >
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne"style={MyStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo"style={MyStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree"style={MyStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the accordion-flush class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
        </div>
        <button type="button" id="toggle" class="btn btn-dark my-4" onClick={darkmoden}>{btnText}</button>
        </>

    );
}
