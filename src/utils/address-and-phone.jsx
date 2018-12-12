import React from 'react';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  CONTACT_TILE_TITLE,
  USER_NAME,
  USER_PHONE
} from '../constants';

const Contact = () => (
  <div className="widget widget_contact">
    <h4 style={{color: 'white'}}>{ CONTACT_TILE_TITLE }</h4>
    <p className="address">
      { USER_NAME }<br />
      { ADDRESS_LINE_1 } <br />
      {ADDRESS_LINE_2} <br />
      { USER_PHONE }
    </p>
  </div>
);

export default Contact;
