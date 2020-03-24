import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Header from './components/header';
import Projects from './components/projects';
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
