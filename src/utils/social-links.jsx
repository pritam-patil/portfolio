import React from 'react';
import PropTypes  from 'prop-types'
import {
  FB_URL,
  GITHUB_URL,
  GPLUS_URL,
  LINKEDIN_URL,
  SKYPE_URL,
  TWITTER_URL
} from "../constants";

const { string } = PropTypes;

const NewTab = props => (
  <a href={props.href} target='_blank' rel="noopener noreferrer">
    <i className={props.className} />
  </a>
);

NewTab.propTypes = ({
  className: string.isRequired,
  href: string.isRequired
});

const Social = props => (
  <ul className={props.className}>
    <li> <NewTab href={FB_URL} className={"fa fa-facebook"}/> </li>
    <li> <NewTab href={TWITTER_URL} className={"fa fa-twitter"}/> </li>
    <li> <NewTab href={GPLUS_URL} className={"fa fa-google-plus"}/> </li>
    <li> <NewTab href={LINKEDIN_URL} className={"fa fa-linkedin"}/> </li>
    <li> <NewTab href={GITHUB_URL} className={"fa fa-github"}/> </li>
    <li> <NewTab href={SKYPE_URL} className={"fa fa-skype"}/> </li>
  </ul>
);

Social.propTypes = ({
  className: PropTypes.string.isRequired
});

export default Social;