

import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
function App() {
  return (
<>
  < Navbar title="TextSearch" aboutText="About TextUtils" />
{/* <div className='container my-3 '>  <Textform title="enter the text here"/></div> */}
<div style={{ width: '75%' }} className='container-sm my-5'> <AboutUs/></div>

</>
  );
}

export default App;
