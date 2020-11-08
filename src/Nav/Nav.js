import React, { Component } from 'react';
import { nativeTouchData } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <section className='navigation'>
        <Link to='/home'>
          Home
        </Link>
        <Link to='/watchlist'>
          Watchlist
        </Link>
      </section>
    );
  }
};

export default Nav;