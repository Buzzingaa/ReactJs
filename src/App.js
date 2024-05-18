import PropTypes from 'prop-types'

import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
<>
  < Navbar title="TextSearch" aboutText="About TextUtils" />
</>
  );
}

export default App;
Navbar.prototype={
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.number
}
Navbar.defaultProps ={
  title:"TextSearch",
  aboutText:"About TextUtils"
}