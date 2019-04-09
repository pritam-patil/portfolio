import React from 'react';
import {
  Education,
  Skills,
  Work,
} from './components';

const Resume = () => (
  <section id="resume">
    <Skills />
    <Work />
    <Education />
  </section>
);

export default Resume;