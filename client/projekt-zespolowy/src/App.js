import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamComponent from './components/teamComponent';
import AppNavbar from './components/navbarComponent';
import TeamDetailsComponent from './components/teamsDetailsComponent';




function App() {
  return (
    <div>
      <AppNavbar/>
      <Router>
        <Switch>
          <Route path = "/teams" component={TeamComponent}/>
        </Switch>
        <Switch>
          <Route path = "/teamsDetails" component={TeamDetailsComponent}/>
        </Switch>
      </Router>
          
    </div>
  );
}

export default App;
