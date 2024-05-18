

import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
import Textform from './components/Textform';

function App() {
  const[mode,setMode]=useState('light')
  const toggleSwitch=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='black'

    }
    else{
      setMode('light')
      document.body.style.background='white'
    }}
  return (
<>
  < Navbar title="TextSearch" aboutText="About TextUtils"  mode={mode} fun={toggleSwitch}/>
<div className='container my-3 '>  <Textform title="enter the text here" mode={mode}/></div>
{/* <div style={{ width: '75%' }} className='container-sm my-5'> <AboutUs/></div> */}

</>
  );
}


export default App;
