import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      
      <div class="container">
      <header class="d-flex flex-wrap justify-content-center py-3 border-bottom" >
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <span class="fs-4">College Competent</span>
        </a>
  
        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#" class="nav-link">College Consulting</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Essay Help</a></li>
          <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        </ul>
      </header>
    </div>
      
      
    </div>
  );
}

export default App;
