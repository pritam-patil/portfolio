import React from 'react';
import {
  Education,
  Skills,
  Work,
} from './components';

const Resume = () => (
  <section id="resume">
    <Work />
    <Skills />
    <Education />
  </section>
);

export default Resume;