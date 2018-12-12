import React from 'react';
import Header from './header';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import ContactMe from './contact';
import Footer from './footer';

const Body = () => (
  <div className="App">
    <Header/>
    <About/>
    <Resume/>
    <Portfolio/>
    <ContactMe/>
    <Footer/>
  </div>
);

export { Body as Portfolio } ;