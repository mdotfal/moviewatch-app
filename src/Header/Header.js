import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="banner welcome">
      <h1>Movie Watch</h1>
      <h3>Welcome to MovieWatch!</h3>
      <p>While 2020 has given us it's fair share of ups and downs, one thing has remained consistent.</p> 
      <strong><p>NEW QUALITY PROGRAMMING!</p></strong>  
      <p>With all of subscription services and multitudes of content to be consumed it's tough to keep track of what's new, what's good, and where to find it.</p>
      <p>MovieWatch is a place you can recommend a movie or tv show, rate it, and tag the streaming services to to keep track of where to find it.</p>
    </header>
  );
}

export default Header;