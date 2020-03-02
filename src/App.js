import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';
import Home from './components/home';
import NavItems from './components/nav';
import Inxsql from './components/projects/inxsql';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="row">
          <Link to="/" className="pagetitle col-6">
            <h1>Sara Ahlers</h1>
            <h2>web developer</h2>
          </Link>
          <nav className="col-6">
            <NavItems/>
          </nav>
        </div>
      </header>

      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projects/inxsql" component={Inxsql} />
          <Route component={Error} />
      </Switch>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function(event) {
  var navLinks =   document.getElementsByClassName('nav-link');
  for (var i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener("mouseenter", function() {
      this.previousSibling.classList.add("rotate");
    });
    navLinks[i].addEventListener("mouseleave", function() {
      this.previousSibling.classList.remove("rotate");
    });
  }
});

export default App;
