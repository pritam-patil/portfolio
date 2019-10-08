import React from 'react';
import { DOT } from '../../../constants';

const Skills = () => (
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
      <div className="nine columns main-col">
        <p> With <span className="strong">6+ years</span> of experience in the industry and hands-on Backend,
          Frontend and Mobile apps development in Advertising { DOT } IoT { DOT } SaaS domains,
          These are the skills in my armour:
        </p>
        <div className="bars">
          <ul className="skills">
            <li key={`skills-python`}>
              <span className="bar-expand python" />
              <em> Python </em>
            </li>
            <li key={`skills-react`}>
              <span className="bar-expand react" />
              <em>ReactJS + Redux</em>
            </li>
            <li key={`skills-html`}>
              <span className="bar-expand html" />
              <em> HTML { DOT } CSS { DOT } JavaScript </em>
            </li>
            <li key={`skills-c`}>
              <span className="bar-expand c" />
              <em> C </em>
            </li>
            <li key={`skills-sql`}>
              <span className="bar-expand sql" />
              <em> SQL { DOT } NoSQL </em>
            </li>
            <li key={`skills-node`}>
              <span className="bar-expand node" />
              <em>Node.JS</em>
            </li>
            <li key={`skills-mobile`}>
              <span className="bar-expand mobile" />
              <em> Mobile { DOT } ReactNative / Flutter </em>
            </li>
          </ul>
        </div>{/* end skill-bars */}
      </div> {/* main-col end */}
    </div>
);

export default Skills;