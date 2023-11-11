import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ boxSizing: 'border-box', marginLeft: '0', marginRight: '0' }}>
    <div class=" fixed-top" style={{fontFamily: "STIX Two Text, sans-serif", background:"white", marginLeft: '0px', marginRight: '0px', alignContent:'center', width:'100%'}}>
      <header class="d-flex flex-wrap justify-content-center py-3 border-bottom" >
        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <img src={require("../src/images/pennant.png")} width="120" height="45" class="d-inline-block align-top" alt=""/>
          <span class="fs-4"></span>
        </Link>
  
        <ul class="nav nav-pills" >
          <li class="nav-item"><Link to="/essayreading" class="nav-link" style={{color:'black'}}>Essay Reading</Link></li>
          <li class="nav-item"><Link to="/thecompletepackage" class="nav-link" style={{color:'black'}}>The Complete Package</Link></li>
          <li class="nav-item"><Link to="/activitiesenhancer" class="nav-link" style={{color:'black'}}>Activities Enhancer</Link></li>
          <li class="nav-item"><Link to="/about" class="nav-link" style={{color:'black'}}>About</Link></li>
        </ul>
      </header>
    </div>
    </div>


    
  


  )
}

export default Navbar