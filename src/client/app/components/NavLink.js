import React from 'react';
import {Link} from 'react-router';
import Style from '../index.scss';



class NavLink extends React.Component {
  render() {
    return (
      <Link {...this.props} className={Style.active}></Link>
    )
  }
}

export default NavLink;