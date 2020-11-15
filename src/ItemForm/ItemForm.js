import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../AppContext';
import RatingOptions from '../RatingOptions/RatingOptions';
import StreamingOptions from '../StreamingOptions/StreamingOptions';
import config from '../config';
import './ItemForm.css';

class ItemForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  static contextType = AppContext;

  state = {
    error: null
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = { 
      title: e.target.title.value, 
      is_netflix: e.target.is_netflix.checked, 
      is_hulu: e.target.is_hulu.checked, 
      is_prime: e.target.is_prime.checked,
      rating: e.target.rating.value 
    }
    const options = {
      method: 'POST',
      body: JSON.stringify( newItem ),
      headers: {
        "Content-Type": "application/json"
      }
    }
    fetch( `${ config.API_ENDPOINT }/api/items`, options )
      .then(res => {
        if ( !res.ok )
          return res.json().then(e => Promise.reject( e ))
        return res.json()
      })
      .then( item => {
        this.context.onAddItem( item )
        this.props.history.push( `/watchlist` )
      })
      .catch( error => {
        console.log({ error })
      })   
  }

  render() {
    return (
      <main className='main'>
        <section>
          <form onSubmit={ this.handleSubmit } id="record-content">
            <section className="overview-section">
              <label htmlFor="title">Movie / TV show title</label>
              <input type="text" id="content-title" name="title" placeholder="Haunting of Hill House" />
            </section>

            <StreamingOptions />
            <RatingOptions />
            
            <div>
              <button 
                type="submit"
              >Submit</button>
              <button 
                type="reset"
              >Reset</button>
            </div>
          </form>
        </section>
      </main>
    );
  }
};

export default withRouter( ItemForm );