import React, { Component } from 'react';

class StreamingOptions extends Component {
  render() {
    return (
      <div className="content-streaming overview-section">
        <fieldset>
          <div>
            <label htmlFor="streaming1" />Netflix
            <input type="checkbox" id="stream-netflix" name="streaming1" value="Netflix"  />
          </div>
          <div>
            <label htmlFor="content-streaming2" />Hulu
            <input type="checkbox" id="stream-hulu" name="streaming2" value="Hulu"  />
          </div>
          <div>
            <label htmlFor="content-streaming3" />Prime Video
            <input type="checkbox" id="stream-primevideo" name="streaming3" value="Prime Video"  />
          </div>
        </fieldset>
      </div>
    );
  }
};

export default StreamingOptions;