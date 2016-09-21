import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import FirstComponent from './FirstComponent'

class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>        
        <Route path="/" component={FirstComponent}/>              
      </Router>
    )
  }
}

export default Routes;