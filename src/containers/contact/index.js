import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Areas } from './components';
import {
  CONTACT_HEADLINE,
  FEED_ENABLED,
  MAIL_TO,
} from '../../constants';
import { Text } from '../../elements';


const ContactMe = () => (
  <section id="contact">
    <div className="row section-head">
      <div className="two columns header-col">
        <Text as="h1">
          <span> Get In Touch.</span>
        </Text>
      </div>
      <div className="ten columns">
        <Text as="p" class_="lead">
          I'm
          looking for
          software roles in
          <Areas />
          Should your needs match this profile,
          </Text>
      </div>
      <Text
          as='a' 
          href={MAIL_TO}
      >
        { CONTACT_HEADLINE }
      </Text>
    </div>
    {FEED_ENABLED && <div className="row">
      <aside className="twelve columns footer-widgets">
        <div className="widget widget_tweets">
          <Text as='h4' class_="widget-title">
            My Feed
          </Text>
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