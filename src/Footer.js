import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
        <li className="nav-item"><Link to="/collegeconsulting" className="nav-link px-2 text-body-secondary">College Consulting</Link></li>
        <li className="nav-item"><Link to="/essayhelp" className="nav-link px-2 text-body-secondary">Essay Help</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
      </ul>
      <p className="text-center text-body-secondary">&copy; 2023 College Competent</p>
    </footer>
  </div>
  )
}

export default Footer