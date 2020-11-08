import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './WatchList.css';

class WatchList extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main role="main">
          <header role="banner">
            <h1>Watchlist</h1>
          </header>
          <section>
            <header>
                <h2>Back to the Future II - <span class='green'>Watch</span></h2>
                <p>01.28.2017</p>
            </header>
            <blockquote>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</blockquote>
            <div class='stream-buttons'>
              <button class='btn'>Netflix</button>
              <button class='btn'>Hulu</button>
              <button class='btn'>Prime Video</button>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
                <h2>The Big Short - <span class='green'>Watch</span></h2>
                <p>01.27.2017</p>
            </header>
            <div class='stream-buttons'>
              <button class='btn'>Netflix</button>
              <button class='btn'>Hulu</button>
              <button class='btn'>Prime Video</button>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
                <h2>The Room - <span class='red'>Skip</span></h2>
                <p>01.26.2017</p>
            </header>
            <div class='stream-buttons'>
              <button class='btn'>Netflix</button>
              <button class='btn'>Hulu</button>
              <button class='btn'>Prime Video</button>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </section>
        </main>
        <footer role="content-info">Footer</footer>
      </div>
    );
  }
};

export default WatchList;