import React, {Component} from 'react';

import './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="welcome-page">
          <h2 id="welcomeText">Welcome to ....</h2>
          <img src="https://media.giphy.com/media/8JQOVahM4wGC99GF0o/giphy.gif" alt="quote"/>

        </div>
      </div>
    );
  }
}

export default Welcome;