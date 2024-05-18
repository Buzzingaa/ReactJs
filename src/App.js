

import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
// import AboutUs from './components/AboutUs';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const[alert,setAlert]=useState(null)
 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
  
    setAlert(null)
  }, 3000);
 }

  const[mode,setMode]=useState('light')
  const toggleSwitch=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='black'
      showAlert('dark mode enabled','success')

    }
    else{
      setMode('light')
      document.body.style.background='white'
      showAlert('light mode enabled','success')
    }}
  return (
<>
  < Navbar title="TextSearch" aboutText="About TextUtils"  mode={mode} fun={toggleSwitch}/>
  <Alert alert={alert}/>
<div className='container my-3 '>  <Textform title="enter the text here" mode={mode} showAlert={showAlert}/></div>
{/* <div style={{ width: '75%' }} className='container-sm my-5'> <AboutUs/></div> */}

</>
  );
}


export default App;
