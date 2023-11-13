import {useState} from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
function App() {

const[alert,setAlert]=useState(null);
let showAlert=(message,type)=>{
  setAlert({msg:message,type:type});
  setTimeout(()=>{
    setAlert(null);
  },1000);
}
  return(
<>
<Router>
<Navbar showAlert={showAlert}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  <Route path="/TextUtils" element={<Textform showAlert={showAlert}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<Textform showAlert={showAlert}/>}> </Route>
</Routes>

</div>
</Router>
</>
);
}

export default App;
