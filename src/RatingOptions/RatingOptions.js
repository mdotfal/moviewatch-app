import React, { Component } from 'react';

class RatingOptions extends Component {
  render() {
    return(
      <div className="content-rating">
        <label htmlFor="rating-watch">
          <input type="radio" id="rating-watch" name="rating" value="Watch" required /> Watch
        </label>
        <label htmlFor="rating-skip">
          <input type="radio" id="rating-skip" name="rating" value="Skip" required /> Skip
        </label>
      </div>
    );
  }
};

export default RatingOptions;