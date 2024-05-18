

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
<>
  < Navbar title="TextSearch" aboutText="About TextUtils" />
<div className='container my-3 '>  <Textform title="enter the text here"/></div>

</>
  );
}

export default App;
