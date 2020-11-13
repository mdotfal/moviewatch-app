import React from 'react';
// import watchList from './watchList';

const AppContext = React.createContext({

  items: [],
  setItem: () => {},
  addItem: () => {},
  deleteNote: () => {}

})

export default AppContext;