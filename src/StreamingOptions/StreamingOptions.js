import React, { Component } from 'react';

class StreamingOptions extends Component {
  render() {
    return (
      <div className="content-streaming overview-section">
        <fieldset>
          <div>
            <label htmlFor="is_netflix" />Netflix
            <input type="checkbox" id="is_netflix" name="option" value="Netflix"  />
          </div>
          <div>
            <label htmlFor="is_hulu" />Hulu
            <input type="checkbox" id="is_hulu" name="option" value="Hulu"  />
          </div>
          <div>
            <label htmlFor="is_prime" />Prime Video
            <input type="checkbox" id="is_prime" name="option" value="Prime Video"  />
          </div>
        </fieldset>
      </div>
    );
  }
};

export default StreamingOptions;