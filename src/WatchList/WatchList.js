import React from 'react';
import { useStateValue } from '../StateProvider';
import ListItem from '../ListItem/ListItem';
import './WatchList.css';

const WatchList = () => {

  const [ { watchList } ] = useStateValue();

  return (
    <div>
      <main className="main">
        <header className="banner">
          <h1>Watchlist</h1>
        </header>
        { watchList.map( ( item, i ) => {
          return <ListItem key={ i } item={ item }/>
        }) }
      </main>
    </div>
  );
};

export default WatchList;