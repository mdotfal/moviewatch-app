import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ItemForm.css';

class Item extends Component {
  render() {
    return (
      <main className='main'>
        <Nav />
        <header>
          <h1>Search for Movie / TV show recommendation</h1>
        </header>
        <section>
          <form id="record-content">
            <section className="overview-section">
              <label for="content-title">Movie / TV show title</label>
              <input type="text" name="content-title" placeholder="Haunting of Hill House" required />
            </section>

            <section className="content-streaming overview-section">
              <div>
                <label for="content-streaming1" />
                <input type="button" name="content-streaming1" value="Netflix" required />
              </div>
              <div>
                <label for="content-streaming2" />
                <input type="button" name="content-streaming2" value="Hulu" required />
              </div>
              <div>
                <label for="content-streaming3" />
                <input type="button" name="content-streaming3" value="Prime Video" required />
              </div>
            </section>

            <section className="form-section overview-section content-rating">
              <div className="content-rating">
                <label for="rating-watch">Watch</label>
                  <input type="radio" id="rating-watch" value="rating-watch" required />
                <label for="rating-skip">Skip</label>
                  <input type="radio" id="rating-skip" value="rating-skip" required />
              </div>
            </section>
            <section className="button-section">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </section>
          </form>
        </section>
      </main>
    );
  }
};

export default Item;