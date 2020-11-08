import React, { Component } from 'react';
import Nav from './Nav/Nav';
import './App.css';

class App extends Component {
  render () {
    return (
      <main className='App'>
        <Nav />
        <header role="banner">
          <h1>Movie Watch</h1>
        </header>

        <section>
          <header>
              <h3>A place to tell all your friends about the new movie or tv show YOU have discovered.</h3>
          </header>
          <p>[<em>placeholder for screenshot of watchlist</em>]</p>
          <p>Rate content to see whats new on all your favorite streaming services.</p>
        </section>

        <section>
          Create a watchlist
          <div className='btn'>
            <button> START HERE </button>
          </div>
        </section>

      </main>
    );
  }
}

export default App;
