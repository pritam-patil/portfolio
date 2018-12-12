import React from 'react';
import { AboutMe, ProfilePic } from './components';

const About = () => (
      <section id="about">
        <div className="row">
          <ProfilePic />
          <AboutMe />
        </div>
      </section>
);

export default About;
