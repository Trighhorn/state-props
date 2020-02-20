import React, { Component } from 'react';
import './Navbar.css';
import { render } from '@testing-library/react';

class Navbar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div>
          Home
        </div>
        <div>
          About
        </div>
        <div>
          Contact
        </div>
      </div>
    )
  }
}

export default Navbar;