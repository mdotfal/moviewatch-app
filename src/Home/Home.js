import React, { Component } from 'react';
import Header from '../Header/Header';
import ItemForm from '../ItemForm/ItemForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section>
          <div>
            Recommend a title
          </div>
          <ItemForm />
        </section>
      </div>
    );
  }
};

export default Home;