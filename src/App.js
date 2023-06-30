import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';



function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/collegeconsulting">
          collegeconsulting
        </Route>
        <Route exact path="/essayhelp">
          essayhelp
        </Route>
        <Route exact path="/about">
          about
        </Route>
      </Switch>
      <Footer/>
    </Router>
      

  );
}

export default App;
