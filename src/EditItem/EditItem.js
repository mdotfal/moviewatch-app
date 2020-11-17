import React, { Component } from 'react';
import AppContext from '../AppContext';
import config from '../config';

class EditItem extends Component {

  static contextType =  AppContext;

  state = {
    id: '',
    title: '',
    is_netflix: false,
    is_hulu: false,
    is_prime: false,
    rating: 'Watch'
  }

  componentDidMount() {
    const itemId = this.props.match.params.itemId
    fetch( `${ config.API_ENDPOINT }/api/items/${ itemId }`, {
      method: 'GET'
    })
    .then( res => {
      if( !res.ok ) {
        return res.json().then( error => Promise.reject( error ))
      }
      return res.json()
    })
    .then( data => {
      this.setState({
        id: data.id,
        title: data.title,
        is_netflix: data.is_netflix,
        is_hulu: data.is_hulu,
        is_prime: data.is_prime,
      })
    })
    .catch( error => this.setState( { error } ))
  }

  handleChangeTitle = e => {
    this.setState({ title: e.target.value })
  }

  handleChangeNetflix = e => {
    this.setState({ is_netflix: e.target.checked })
  }

  handleChangeHulu = e => {
    this.setState({ is_hulu: e.target.checked })
  }

  handleChangePrime = e => {
    this.setState({ is_prime: e.target.checked })
  }

  handleChangeRating = e => {
    this.setState({ rating: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('clicked')
    const { itemId } = this.props.match.params
    console.log( itemId )
    const { id, title, is_netflix, is_hulu, is_prime, rating } = this.state
    const updatedItem = { 
      id, 
      title, 
      is_netflix, 
      is_hulu, 
      is_prime, 
      rating 
    }
    console.log( updatedItem )

    fetch( `https://blooming-thicket-74963.herokuapp.com/api/items/${ itemId }`, {
      method: 'PATCH',
      body: JSON.stringify( updatedItem ),
      headers: 'application/json'
    })
    .then(res => {
      if ( !res.ok )
        return res.json().then( error => Promise.reject( error ) )
    })
    .then( () => {
      console.log('test')
      this.context.onUpdateItem( updatedItem )
      this.props.history.push( '/watchlist' )
    })
    .catch( error => this.setState( { error } ))
  }
  
  handleClickCancel = () => {
    this.props.history.push( '/' );
  }
  
  render() {
    const { title, is_netflix, is_hulu, is_prime } = this.state

    return (
      <section className='EditItemForm'>
        <h2>Edit item</h2>
          <form onSubmit={ this.handleSubmit }> 
            <section className="overview-section">
              <label htmlFor="title">Movie / TV show title</label>
              <input type="text" id="content-title" name="title" placeholder="Haunting of Hill House" value={ title } onChange={ this.handleChangeTitle }/>
            </section>
            
            <div className="content-streaming overview-section">
              <fieldset>
                <div>
                  <label htmlFor="is_netflix" />Netflix { ' ' }
                  <input type="checkbox" id="is_netflix" name="option" value={ is_netflix } onChange={ this.handleChangeNetflix }/>
                </div>
                <div>
                  <label htmlFor="is_hulu" />Hulu { ' ' }
                  <input type="checkbox" id="is_hulu" name="option" value={ is_hulu }  onChange={ this.handleChangeHulu }/>
                </div>
                <div>
                  <label htmlFor="is_prime" />Prime Video { ' ' }
                  <input type="checkbox" id="is_prime" name="option" value={ is_prime } onChange={ this.handleChangePrime }  />
                </div>
              </fieldset>
            </div>

            <div className="content-rating">
              <label htmlFor="rating-watch"> Watch 
                <input type="radio" id="rating-watch" name="rating" value='Watch' required onChange={ this.handleChangeRating }/>
              </label>
              <label htmlFor="rating-skip">Skip
                <input type="radio" id="rating-skip" name="rating" value="Skip" required onChange={ this.handleChangeRating }/> 
              </label>
            </div>

            <div>
              <button 
                type="submit"
                onSubmit={ this.handleSubmit }
              >Submit</button>
              <button 
                type="Cancel"
                onChange={ this.handleClickCancel }
              >Cancel</button>
            </div>
        </form>
      </section>
    );
  }
}

export default EditItem;