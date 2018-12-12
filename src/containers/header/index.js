import React from 'react';
import { NavBar, Headline } from './components';

const Header = () => (
      <header id="home">
        <nav id="nav-wrap">
          <a
            className="mobile-btn"
            href="#nav-wrap"
            title="Show navigation"
          >
            Show navigation
          </a>
          <a
            className="mobile-btn"
            href="#"
            title="Hide navigation"
          >
            Hide navigation
          </a>
          <NavBar />
        </nav> {/* end #nav-wrap */}
        <Headline />        
        <p className="scrolldown">
          <a
            className="smoothscroll"
            href="#about"
          >
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
);

export default Header;
