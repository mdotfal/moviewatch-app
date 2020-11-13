import React, { Component } from 'react';

class StreamingOptions extends Component {
  render() {
    return (
      <div className="content-streaming overview-section">
        <fieldset>
          <div>
            <label htmlFor="isNetflix" />Netflix
            <input type="checkbox" id="isNetflix" name="option" value="Netflix"  />
          </div>
          <div>
            <label htmlFor="isHulu" />Hulu
            <input type="checkbox" id="isHulu" name="option" value="Hulu"  />
          </div>
          <div>
            <label htmlFor="isPrime" />Prime Video
            <input type="checkbox" id="isPrime" name="option" value="Prime Video"  />
          </div>
        </fieldset>
      </div>
    );
  }
};

export default StreamingOptions;