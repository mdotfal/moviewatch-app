import React, { Component } from 'react';

class StreamingOptions extends Component {
  render() {
    return (
      <div className="content-streaming overview-section">
        <fieldset>
          <div>
            <label htmlFor="content-streaming1" />Netflix
            <input type="checkbox" id="stream-netflix" name="content-streaming1" value="Netflix" required />
          </div>
          <div>
            <label htmlFor="content-streaming2" />Hulu
            <input type="checkbox" id="stream-hulu" name="content-streaming2" value="Hulu" required />
          </div>
          <div>
            <label htmlFor="content-streaming3" />Prime Video
            <input type="checkbox" id="stream-primevideo" name="content-streaming3" value="Prime Video" required />
          </div>
        </fieldset>
      </div>
    );
  }
};

export default StreamingOptions;