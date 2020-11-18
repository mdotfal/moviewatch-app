import React, { Component } from 'react';
import AppContext from '../AppContext';
import config from '../config';
import { Link, withRouter } from 'react-router-dom';
import netflix from '../icons/netflix.png';
import hulu from '../icons/hulu.png';
import prime_video from '../icons/prime_video.png';
import './ListItem.css';


class ListItem extends Component {
  static defaultProps ={
    onDeleteItem: () => {},
  }

  static contextType = AppContext;

  handleClickDelete = e => {
    e.preventDefault()
    const itemId = this.props.item.id

    fetch( `${ config.API_ENDPOINT }/api/items/${ itemId }`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then( res => {
      if ( !res.ok )
        return res.json().then( e => Promise.reject( e ))
      return res
    })
    .then( () => {
      this.context.onDeleteItem( itemId )
      this.props.onDeleteItem( itemId )
      this.props.history.push( '/watchlist' );
    })
    .catch( error => {
      console.log( error )
    })
  }

  render() {
    return (
      <section>
        <header>
          <h2>{ this.props.item.title } - 
            <span>
              { this.props.item.rating === 'Watch' 
                ? <button className='green'>{ this.props.item.rating }</button> 
                : <button className='red'>{ this.props.item.rating }</button> 
              }
            </span>
          </h2>
            <p>Available on:</p>
        </header>
        <div className='stream-buttons'>
          { this.props.item.is_netflix !== false ? <img src={ netflix } alt='netflix icon' /> : "" }
          { this.props.item.is_hulu !== false ? <img src={ hulu } alt='hulu icon'/> : "" }
          { this.props.item.is_prime !== false ? <img src={ prime_video } alt='prime video icon'/> : "" }
        </div>
        <Link to={ `/edit/${ this.props.item.id }` }>
          <button
            className='btn' 
            type='button'>
              Edit
          </button>
        </Link>
        <button
          className='btn'
          onClick={ this.handleClickDelete } 
          type='button'>
            Delete
        </button>
      </section>
    );
  }
};

export default withRouter( ListItem );