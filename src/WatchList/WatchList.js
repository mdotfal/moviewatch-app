import React from 'react';
import { useStateValue } from '../StateProvider';
import ListItem from '../ListItem/ListItem';
import AppContext from '../AppContext';
import './WatchList.css';

<<<<<<< HEAD
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
=======
class WatchList extends Component {
  static contextType = AppContext;

  render() {
    const { items } = this.context
    
    return (
      <div>
        <main className="main">
          <header className="banner">
            <h1>Watchlist</h1>
          </header>
          { items.map( ( item, i ) => {
            return <ListItem 
              key={ i } 
              item={ item }
              onDeleteItem={ this.context.onDeleteItem }
            />
          }) } 
        </main> 
      </div>
    );
  }
>>>>>>> dev
};

WatchList.defaultProps = {
  items: []
}

export default WatchList;