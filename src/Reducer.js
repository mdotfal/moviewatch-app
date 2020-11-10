export const initialState = {
  title: '',
  services: {
    isNetflix: false,
    isHulu: false,
    isPrime: false,
  },
  rating: '',
  watchList: [
    { title: 'The Big Short', isNetflix: true, rating: "Watch" },
    { title: 'The Room', isNetflix: true, rating: "Skip" },
    { title: 'The Room', isNetflix: true, rating: "Skip" },
  ]
};

const reducer = ( state, action ) => {
  switch( action.type ) {
    case 'ADD_TO_WATCHLIST':
      return { 
        ...state,
        watchList: [ ...state.watchList, action.item ]
      }
    default:
      return state;
  }
};

export default reducer;