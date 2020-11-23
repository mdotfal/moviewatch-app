import React from 'react';


const AppContext = React.createContext({

  items: [],
  onAddItem: () => {},
  onDeleteItem: () => {},
  onUpdateItem: () => {}

});

export default AppContext;