import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section className='home'>
          <div>
            Recommend a title
          </div>
        </section>
      </div>
    );
  }
};

export default Home;