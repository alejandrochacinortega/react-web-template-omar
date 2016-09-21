import React from 'react';
import {Link} from 'react-router';


class App extends React.Component {
  render() {
    return (
      <div>
        <h2>React starter template Omar</h2>
        <ul role="nav">
          <ul><Link to="/home">Home</Link></ul>
          <ul><Link to="/about">About</Link></ul>
        </ul>
      </div>
    )
  }
}

export default App;