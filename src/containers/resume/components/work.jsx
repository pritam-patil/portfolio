import React from 'react';

const Stack = ({ desc }) => (
  <li id="tech"> <strong>Tech used: </strong> { desc } </li>
);

const Work = () => (
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>IDC Technologies, Pune</h3>
            <p className="info">
              Software Engineer (Front-end)
              <span>•</span>
              <em className="date">Apr 2019 - Present</em>
            </p>
            <ul className="jd">
              <li>BA for Tata Consultancy Services.</li>
              <li>Worked in mostly independent role as ReactJS developer on a Automobiile
E-commerce website. </li>
              <Stack desc="ReactJS, Redux, Redux-Thunk, Jira, Git"/>
            </ul>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Raja Software Labs, Pune</h3>
            <p className="info">
              Software Engineer (Front-end)
              <span>•</span>
              <em className="date">Dec 2017 - Oct 2018</em>
            </p>
            <ul className="jd">
              <li>Worked on developing UX for a Tech-giant’s Home automation system</li>
              <li>Involved in shipping 6+ major release cycles with multiple IoT devices</li>
              <Stack desc="ReactJS, Redux, BackboneJS, Jira, Git"/>
            </ul>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Velotio Technologies, Pune</h3>
            <p className="info">
              Senior Software Engineer (Back-end)
              <span>•</span>
              <em className="date">March 2017 - June 2017</em>
            </p>
            <ul className="jd">
              <li>Implemented Office 365 integration into SaaS optimization platform</li>
              <li>Worked on Test framework for a PR analysis firm</li>
              <Stack desc="Node.js, Ember-cli, Selenium, Mocha, Test‘em" />
            </ul>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Carnot Technologies, Mumbai</h3>
            <p className="info">
              Senior Software Engineer (Back-end)
              <span>•</span>
              <em className="date">March 2016 - Oct 2016</em>
            </p>
            <ul className="jd">
              <li>Scaled Backend system with cache solution to handle real-time data</li>
              <li>Managed a Mobile development 3rd party for mobile apps changes</li>
              <Stack desc="Python + Django, Redis, postgresql, Trello, Git" />
            </ul>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Airpush Inc, Bengaluru </h3>
            <p className="info">
              Software Engineer (Back-end)
              <span>•</span>
              <em className="date">Dec 2013 - Feb 2015</em>
            </p>
            <ul className="jd">
              <li>Implemented Advanced Location targeting (ALT) system along with framework for Fraud Detection in live ad serving. </li>
              <li>Worked on backend system of ad-serving platform making CI, CD</li>
              <Stack desc="Python, PHP, Lua, MySQL, Redis, Java, Jira, svn" />
            </ul>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Ittiam Systems, Bengaluru</h3>
            <p className="info">
              Software Engineer (Systems)
              <span>•</span>
              <em className="date">Jul 2012 - Nov 2013</em>
            </p>
            <ul className="jd">
              <li>Worked on different AV encoder systems (MPEG2, H.264, AAC)</li>
              <li>Involved in development of Media System SDK by Ittiam with OMX IL</li>
            </ul>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div>
);

export default Work;