import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navigation from './components/areas/Navigation/Navigation'
import Homepage from './pages/Homepage'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
