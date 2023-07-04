import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 border-bottom" >
        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <img src={require("/Users/raymondalvin/Desktop/react/collegecompetent/src/images/pennant-e1688146797850.png")} width="120" height="45" class="d-inline-block align-top" alt=""/>
          <span class="fs-4"></span>
        </Link>
  
        <ul class="nav nav-pills">
          <li class="nav-item"><Link to="/essayreading" class="nav-link">Essay Reading</Link></li>
          <li class="nav-item"><Link to="/thecompletepackage" class="nav-link">The Complete Package</Link></li>
          <li class="nav-item"><Link to="/activitiesenhancer" class="nav-link">Activities Enhancer</Link></li>
          <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
        </ul>
      </header>
    </div>
    
    // <div class="container fixed-top">
    //   <header class="d-flex flex-wrap justify-content-center py-3 navbar" >
    //     <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ">
    //       <svg class="bi me-2" width="40" height="0"><use xlinkHref="#bootstrap"/></svg>
    //       <img src={require("/Users/raymondalvin/Desktop/react/collegecompetent/src/images/pennant-e1688146797850.png")} width="120" height="45" class="d-inline-block align-top" alt=""/>
    //       <span class="fs-4 "></span>
    //     </Link>
  
    //     <ul class="nav nav-pills">
    //       <li class="nav-item"><Link to="/collegeconsulting" class="nav-link">College Consulting</Link></li>
    //       <li class="nav-item"><Link to="/essayhelp" class="nav-link">Essay Help</Link></li>
    //       <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
    //     </ul>
    //   </header>
    // </div>
            
  


  )
}

export default Navbar