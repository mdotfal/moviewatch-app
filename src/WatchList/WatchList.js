import React, { Component } from 'react';
import './WatchList.css';

class WatchList extends Component {
  render() {
    return (
      <div>
        <main className="main">
          <header className="banner">
            <h1>Watchlist</h1>
          </header>
          <section>
            <header>
                <h2>Back to the Future II - <span className='green'>Watch</span></h2>
            </header>
            <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris.</blockquote>
            <div className='stream-buttons'>
              <button className='btn'>Netflix</button>
              <button className='btn'>Hulu</button>
              <button className='btn'>Prime Video</button>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
                <h2>The Big Short - <span className='green'>Watch</span></h2>
            </header>
            <div className='stream-buttons'>
              <button className='btn'>Netflix</button>
              <button className='btn'>Prime Video</button>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
                <h2>The Room - <span className='red'>Skip</span></h2>
            </header>
            <div className='stream-buttons'>
              <button className='btn'>Prime Video</button>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </section>
        </main>
        <footer className="content-info">Footer</footer>
      </div>
    );
  }
};

export default WatchList;