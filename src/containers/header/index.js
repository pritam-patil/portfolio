import React from 'react';
import {
  NavSettings,
  ScrollSettings,
} from '../../components'
import { NavBar, Headline } from './components';

const Header = () => (
      <header id="home">
        <nav id="nav-wrap">
          <NavSettings />
          <NavBar />
        </nav> {/* end #nav-wrap */}
        <Headline />        
        <ScrollSettings />
      </header>
);

export default Header;
