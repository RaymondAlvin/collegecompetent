import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';



function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/essayreading">
          <Contact />
        </Route>
        <Route exact path="/thecompletepackage">
          the complete package
        </Route>
        <Route exact path="/activitiesenhancer">
          activities enhancer
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer/>
    </Router>
      

  );
}

export default App;
