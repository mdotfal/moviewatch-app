import React, { Component } from 'react';

class RatingOptions extends Component {
  render() {
    return(
      <div className="content-rating">
        <fieldset>
          <legend>Choose one:</legend>
          <label htmlFor="rating-watch">
            <input type="radio" id="rating-watch" name="rating" value="Watch" required /> Watch
          </label>
          <label htmlFor="rating-skip">
            <input type="radio" id="rating-skip" name="rating" value="Skip" required /> Skip
          </label>
        </fieldset>
      </div>
    );
  }
};

export default RatingOptions;