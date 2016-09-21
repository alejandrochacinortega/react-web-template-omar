import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute, browserHistory} from 'react-router'

import Home from './Home';
import About from './About';
import App from './App';


class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    )
  }
}

export default Routes;