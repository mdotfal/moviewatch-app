import React, { Component } from 'react';
import './StreamingOptions.css';

class StreamingOptions extends Component {
  render() {
    return (
      <div className="content-streaming overview-section flex">
        <fieldset>
          <legend>Select all that apply</legend>
          <div>
            <label htmlFor="is_netflix">Netflix
            <input type="checkbox" id="is_netflix" name="option" value="Netflix" /></label>
          </div>
          <div>
            <label htmlFor="is_hulu">Hulu
            <input type="checkbox" id="is_hulu" name="option" value="Hulu" /></label>
          </div>
          <div>
            <label htmlFor="is_prime">Prime Video
            <input type="checkbox" id="is_prime" name="option" value="Prime Video" /></label>
          </div>
        </fieldset>
      </div>
    );
  };
};

export default StreamingOptions;