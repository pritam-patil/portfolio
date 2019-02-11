import React from 'react';
import Social from '../../../utils/social-links';

const Headline = () => (
    <div className="row banner">
        <div className="banner-text">
        <h1 className="responsive-headline">
            <h2> Howdy! </h2>
            <span style={{fontWeight: 200, fontSize: '30px'}}>I'm</span> Pritam Patil.
        </h1>
        <h3>
            I'm a
            <span> Web developer</span>
            , with experience in
            <span> Front-end</span>,
            <span> Back-end </span>
            and <span> Mobile apps; </span>
            creating awesome and effective products
            for companies of all sizes around the globe.
            Us start
            <a
            className="smoothscroll"
            href="#about"
            >
                {` scrolling `}
            </a>
            {`to learn more about me, `}
            <a
            className="smoothscroll"
            href="#about"
            >
                {` let.`}
            </a>.
        </h3>
        <hr />
        <Social className={"social"} />
        </div>
    </div>
);

export default Headline;