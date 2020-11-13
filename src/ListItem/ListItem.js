import React, { Component } from 'react';
import AppContext from '../AppContext';
// import watchList from '../watchList';

class ListItem extends Component {
  static contextType = AppContext;
  
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
            </span></h2>
            <p>Available on:</p>
        </header>
          <div className='stream-buttons'>
            { this.props.item.isNetflix !== false ? <button> Netflix </button> : "" }
            { this.props.item.isHulu !== false ? <button> Hulu </button> : "" }
            { this.props.item.isPrime !== false ? <button> Prime </button> : "" }
          </div>
        <button 
          onClick={ () => this.props.onEditItem( this.props.item ) } 
          type='button'>
            Edit
        </button>
        <button
          onClick={ () => this.props.onDeleteItem( this.props.item ) } 
          type='button'>
            Delete
        </button>
      </section>
    );
  }
};

export default ListItem;