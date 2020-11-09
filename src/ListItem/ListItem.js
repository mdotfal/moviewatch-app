import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <section>
        <header>
            <h2>The Big Short - <span className='green'>Watch</span></h2>
        </header>
        <div className='stream-buttons'>
          <button className='btn'>Netflix</button>
          <button className='btn'>Prime Video</button>
        </div>
        <button>Edit</button>
        <button>Delete</button>
      </section>
    );
  }
};

export default ListItem;