import React from 'react';


const AppContext = React.createContext({

  items: [],
  addItem: () => {},
  deleteNote: () => {}

})

export default AppContext;