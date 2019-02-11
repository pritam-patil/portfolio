import React from 'react';
import { AboutMe, ProfilePic } from './components';
import { Education } from '../resume/components';

const About = () => (
      <section id="about">
        <div className="row">
          <ProfilePic />
          <AboutMe />
          <Education />
        </div>
      </section>
);

export default About;
