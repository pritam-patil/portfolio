import React from 'react';

const Education = () => (
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>Pune Institute of Computer Technology</h3>
            <p className="info"> B. E. in Computer Science <span>•</span> <em className="date">April 2012</em></p>
            <p>
              Academic subjects: Design and Analysis of Algorithms, Operating Systems, Computer Organisation,
              Software Architecture, Database and Management Systems, Theory of Computation
            </p>
            <p><span>Aggregate: <h6>69%</h6></span></p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> 
);

export default Education;