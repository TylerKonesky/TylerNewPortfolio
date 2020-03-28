import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import AboutMe from './components/aboutme/aboutme';
import Header from './components/header';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import history from './history';


function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/AboutMe' component={AboutMe} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
