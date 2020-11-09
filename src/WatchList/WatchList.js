import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './WatchList.css';

class WatchList extends Component {
  render() {
    return (
      <div>
        <main className="main">
          <header className="banner">
            <h1>Watchlist</h1>
          </header>
          <ListItem />
          <ListItem />
          <ListItem />
        </main>
      </div>
    );
  }
};

export default WatchList;