import React from 'react';
import PropTypes from 'prop-types';
import { DOT } from '../../../constants';

const Areas = props => (
    <span style={{fontWeight: props.bold && 'bold' || 'normal', color: '#fff', fontSize: '20px'}}> 
        { ` Frontend ${DOT} Backend ${DOT} Fullstack ${DOT} Mobile.` }
        <br/>
    </span>
);

Areas.propTypes = ({
    bold: PropTypes.bool,
});

Areas.defaultProps = ({
    bold: false
})

export default Areas;