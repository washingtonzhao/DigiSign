import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import Register  from './components/Register';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/get-started' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;