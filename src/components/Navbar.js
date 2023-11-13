import React,{useState} from 'react';
import {Link} from'react-router-dom';
let Navbar=  function Navbar(props) {
  let styles={
    color:"black",
    backgroundColor:"white"
  };
  const[mode,setMode]=useState("light");
  function changemode(){
if (mode==='light'){
  styles={
    color:"white",
    backgroundColor:"black"
  };
  
  document.body.style.color='white';
  document.body.style.backgroundColor='#1a1d3d';
  setMode("dark")
  props.showAlert("You Have Enabled Dark Mode","sucess");
  document.title='TextUtils-DarkMode'
  }

  
  else{
    styles={
      color:"black",
      backgroundColor:"white"
    };
    document.body.style.color='#1a1d3d';
    document.body.style.backgroundColor='white'
    setMode("light")
    props.showAlert("You Have Enabled Light Mode","success");
    document.title='TextUtils-LightMode'
    
  }
}
  return (
    <nav style={styles} className={`navbar navbar-expand-lg bg-body-primary`}>
    <div className="container-fluid">
      <Link style={styles} className="navbar-brand" to="/TextUtils">TextUtils</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link style={styles} className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link  style={styles}className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
    <div class="form-check form-switch">
  <input  onClick={changemode}className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label  style={styles} className="form-check-label" for="flexSwitchCheckDefault"><strong>{`Enabled ${mode}`}</strong></label>
</div>
  </nav>
);
}
export default Navbar;
