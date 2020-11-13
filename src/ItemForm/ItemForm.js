import React, { Component } from 'react';
import AppContext from '../AppContext';
import RatingOptions from '../RatingOptions/RatingOptions';
import StreamingOptions from '../StreamingOptions/StreamingOptions';
import './ItemForm.css';

class ItemForm extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }

  static contextType = AppContext;
  
  handleSubmit = e => {
    e.preventDefault()
    // console.log('submit clicked', this.context )
    const newItem = {
      title: e.target.title.value,
      rating: e.target.rating.value,
      isNetflix: e.target.isNetflix.value, 
      isHulu: e.target.isHulu.value, 
      isPrime: e.target.isPrime.value, 
    }
    this.context.onAddItem( newItem );
    // console.log( 'props', this.props )
    // this.props.history.push( '/' );
  }

  handleButtonClick = () => {
    // this.form.reset()
  }

  render() {
    return (
      <main className='main'>
        <section>
          <form onSubmit={ this.handleSubmit } id="record-content">
            <section className="overview-section">
              <label htmlFor="title">Movie / TV show title</label>
              <input type="text" id="content-title" name="title" placeholder="Haunting of Hill House" />
            </section>

            <StreamingOptions />
            <RatingOptions />
            
            <div>
              <button 
                type="submit"
              >Submit</button>
              <button 
                type="reset"
                onClick={ this.handleButtonClick }
              >Reset</button>
            </div>
          </form>
        </section>
      </main>
    );
  }
};

export default ItemForm;