import React from 'react';
import { HEART } from '../../constants';
import Social from '../../utils/social-links';

const Footer = () => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <Social className={"social-links"} />
        <ul className="copyright">
          <li> { `© Made with ${ HEART }  by PP `} </li>
          <li style={{opacity:  0.5}}>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
        </ul>
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
    </div>
  </footer>
);

export default Footer;