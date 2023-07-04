import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
        <li className="nav-item"><Link to="/essayreading" className="nav-link px-2 text-body-secondary">Essay Reading</Link></li>
        <li className="nav-item"><Link to="/thecompletepackage" className="nav-link px-2 text-body-secondary">The Complete Package</Link></li>
        <li className="nav-item"><Link to="/activitiesenhancer" className="nav-link px-2 text-body-secondary">Activities Enhancer</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
      </ul>
      <p className="text-center text-body-secondary">&copy; 2023 College Competent</p>
    </footer>
  </div>
  )
}

export default Footer