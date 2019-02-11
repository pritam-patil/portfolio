import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Areas } from './components';
import { CONTACT_HEADLINE } from '../../constants';
const FEED_ENABLED = false;

const ContactMe = () => (
  <section id="contact">
    <div className="row section-head">
      <div className="two columns header-col">
        <h1><span>Get In Touch.</span></h1>
      </div>
      <div className="ten columns">
        <p className="lead">
          I'm actively 
          <span> looking for </span>
          software roles in
          <Areas />
          Should your needs match this profile;
        </p>
      </div>
      <a href={`mailto:pritam18@hotmail.com`}> {CONTACT_HEADLINE} </a>
    </div>
    {FEED_ENABLED && <div className="row">
      <aside className="twelve columns footer-widgets">
        <div className="widget widget_tweets">
          <h4 className="widget-title">My Feed</h4>
          <TwitterTimelineEmbed
            sourceType={"profile"}
            screenName={"TheDoucheP"}
            options={{height: 480}}
          />
        </div>
      </aside>
    </div>
    }
  </section>
);

export default ContactMe;