import React, { Component } from 'react';
import RatingOptions from '../RatingOptions/RatingOptions';
import StreamingOptions from '../StreamingOptions/StreamingOptions';
import './ItemForm.css';

class ItemForm extends Component {

  static defaultProps = {
    onAddItem: () => {}
  }
  
  handleSubmit = e => {
    e.preventDefault()
    console.log('submit clicked')
    const { title } = e.target
    // const { title, isNetflix, isHulu, isPrime, rating } = e.target
    const item = {
      title: title.value,
    //   isNetflix: isNetflix.value,
    //   isHulu: isHulu.value,
    //   isPrime: isPrime.value,
    //   rating: rating.value
    }
    this.setState({ error: null })

  }

  render() {
    return (
      <main className='main'>
        <section>
          <form onSubmit={ e => this.handleSubmit( e ) } id="record-content">
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
              <button type="reset">Reset</button>
            </div>
          </form>
        </section>
      </main>
    );
  }
};

export default ItemForm;