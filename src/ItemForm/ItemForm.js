import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './ItemForm.css';

class ItemForm extends Component {
  render() {
    return (
      <main className='main'>
        <section>
          <form id="record-content">
            <section className="overview-section">
              <label htmlFor="content-title">Movie / TV show title</label>
              <input type="text" name="content-title" placeholder="Haunting of Hill House" required />
            </section>

            <div className="content-streaming overview-section">
              <div>
                <label htmlFor="content-streaming1" />
                <input type="button" name="content-streaming1" value="Netflix" required />
              </div>
              <div>
                <label htmlFor="content-streaming2" />
                <input type="button" name="content-streaming2" value="Hulu" required />
              </div>
              <div>
                <label htmlFor="content-streaming3" />
                <input type="button" name="content-streaming3" value="Prime Video" required />
              </div>
            </div>
            
              <div className="content-rating">
                <label htmlFor="rating-watch" />
                  <input type="button" id="rating-watch" value="Watch" required />
                <label htmlFor="rating-skip" />
                  <input type="button" id="rating-skip" value="Skip" required />
              </div>
            
            <div>
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        </section>
      </main>
    );
  }
};

export default ItemForm;