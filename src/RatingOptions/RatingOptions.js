import React, { Component } from 'react';

class RatingOptions extends Component {
  render() {
    return(
      <div className="content-rating">
        <label htmlFor="rating-watch"> Watch
          <input type="radio" id="rating-watch" name="rating" value="Watch" required />
        </label>
        <label htmlFor="rating-skip">Skip
          <input type="radio" id="rating-skip" name="rating" value="Skip" required /> 
        </label>
      </div>
    );
  }
};

export default RatingOptions;