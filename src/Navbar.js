import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 border-bottom" >
        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <span class="fs-4">College Competent</span>
        </Link>
  
        <ul class="nav nav-pills">
          <li class="nav-item"><Link to="/collegeconsulting" class="nav-link">College Consulting</Link></li>
          <li class="nav-item"><Link to="/essayhelp" class="nav-link">Essay Help</Link></li>
          <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar