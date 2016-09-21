import React from 'react';
import NavLink from './NavLink';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>React starter template Omar</h2>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>

          {this.props.children}
        </ul>
      </div>
    )
  }
}

export default App;