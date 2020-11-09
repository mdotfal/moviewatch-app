import React, { Component } from 'react';
import RatingOptions from '../RatingOptions/RatingOptions';
import StreamingOptions from '../StreamingOptions/StreamingOptions';
import './ItemForm.css';

class ItemForm extends Component {
  render() {
    return (
      <main className='main'>
        <section>
          <form id="record-content">
            <section className="overview-section">
              <label htmlFor="content-title">Movie / TV show title</label>
              <input type="text" id="content-title" name="content-title" placeholder="Haunting of Hill House" required />
            </section>

            <StreamingOptions />
            <RatingOptions />
            
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