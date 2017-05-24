// @flow
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch,
} from 'react-router-dom';
import './App.css';
import Dashboard from './routes/Dashboard';
import Signing from './routes/Signing';

const NoMatch = () => (
  <h1>404</h1>
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/track" component={Dashboard} />
          <Redirect from="/" exact to="/login" />
          <Route path="/login" component={Signing} />
          <Route path="/signup" component={Signing} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
