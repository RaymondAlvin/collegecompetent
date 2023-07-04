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
          <Contact title="Schedule your FREE Essay Reading Consultation!"/>
        </Route>
        <Route exact path="/thecompletepackage">
          <Contact title="Schedule your FREE Complete Package Consultation!"/>
        </Route>
        <Route exact path="/activitiesenhancer">
          <Contact title="Schedule your FREE Activities Enhancer Consultation!"/>
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
