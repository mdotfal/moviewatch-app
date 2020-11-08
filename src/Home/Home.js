import React, { Component } from 'react';
import Header from '../Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section>
          <div>
            Recommend a title
          </div>
          <form id="record-content">
            <section class="form-section overview-section">
              <label for="content-title">Movie / TV show title</label>
              <input type="text" name="content-title" placeholder="Haunting of Hill House" required />
              <label for="content-rating">Rating</label>
                <button>Watch</button>
                <button>Skip</button>
            </section>
            <section class="button-section">
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </section>
          </form>
        </section>
      </div>
    );
  }
};

export default Home;