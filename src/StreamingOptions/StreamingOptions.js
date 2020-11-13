import React, { Component } from 'react';

class StreamingOptions extends Component {
  render() {
    return (
      <div className="content-streaming overview-section">
        <fieldset>
          <div>
            <label htmlFor="isNetflix" />Netflix
            <input type="checkbox" id="stream-netflix" name="isNetflix" value="Netflix"  />
          </div>
          <div>
            <label htmlFor="isHulu" />Hulu
            <input type="checkbox" id="stream-hulu" name="isHulu" value="Hulu"  />
          </div>
          <div>
            <label htmlFor="isPrime" />Prime Video
            <input type="checkbox" id="stream-primevideo" name="isPrime" value="Prime Video"  />
          </div>
        </fieldset>
      </div>
    );
  }
};

export default StreamingOptions;