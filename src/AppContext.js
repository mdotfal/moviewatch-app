import React from 'react';
// import watchList from './watchList';

const AppContext = React.createContext({

  items: [],
  addItem: () => {},
  deleteNote: () => {}

})

export default AppContext;