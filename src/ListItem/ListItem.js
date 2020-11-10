import React from 'react';

const ListItem = ({ item }) => {
  
  return (
    <section>
      <header>
        <h2>{ item.title } - <span className='green'>{ item.rating }</span></h2>
      </header>
      <div className='stream-buttons'>
  
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </section>
  );
};

export default ListItem;