import React, { Component } from 'react';
import AppContext from '../AppContext';
// import watchList from '../watchList';

class ListItem extends Component {
  static contextType = AppContext;
  
  render() {

    return (
      <section>
        <p>Available on:</p>
        <header>
          <h2>{ this.props.item.title } - 
            <span>
              { this.props.item.rating === 'Watch' 
                ? <button className='green'>{ this.props.item.rating }</button> 
                : <button className='red'>{ this.props.item.rating }</button> 
              }
            </span></h2>
        </header>
          <div className='stream-buttons'>
            { this.props.item.isNetflix ? <button> Netflix </button> : "" }
            { this.props.item.isHulu ? <button> Hulu </button> : "" }
            { this.props.item.isPrime ? <button> Prime </button> : "" }
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