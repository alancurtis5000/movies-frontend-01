import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return(
    <div className="Header">
      Header
      <Link to="/">Page01</Link>
      <Link to="/page2">Page02</Link>
    </div>
  )
}

export default Header;