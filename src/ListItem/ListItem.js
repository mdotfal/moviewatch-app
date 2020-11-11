import React, { Component } from 'react';
import watchList from '../watchList';

class ListItem extends Component {
  render() {
    return (
      {
        watchList.map( item => {
            <section>
              <header>
                <h2>{ item.title } - <span className='green'>{ item.rating }</span></h2>
              </header>
                <div className='stream-buttons'>
                  { item.isNetflix ? <button> Netflix </button> : "" }
                  { item.isHulu ? <button> Hulu </button> : "" }
                  { item.isPrime ? <button> Prime </button> : "" }
                </div>
              <p>Edit</p>
              <p>Delete</p>
            </section>
        })
      }
    );
  }
};

export default ListItem;