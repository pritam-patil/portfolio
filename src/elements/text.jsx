import React from 'react'
import PropTypes from 'prop-types'




const Text = props => {
    console.log("Props to text");
    console.table(props);
    const { as, class_, value } = props;
    let component = null;
    console.log("otherProps to text");
    // console.table(otherProps);
    switch (as) {
        case 'h1':
            component = <h1 className={class_}>
                            {props.children}
                        </h1>;
            break;
        case 'h4':
            component = <h4 className={class_}>
                            {props.children}
                        </h4>;
            break;
        case 'h5':
            component = <h5 className={class_}>
                            {props.children}
                        </h5>;
            break;
        case 'p':
            component = <p className={class_}>
                            {props.children}
                        </p>;
            break;
        case 'a':
            component = <a 
                            rel="noopener noreferrer"
                            {...props}
                        >
                            {props.children}
                        </a>;
            break;        
        default:
            component = <span>{ value }</span>
    }

    return component;
}

Text.defaultProps = {
    as: 'h6',
}

Text.propTypes = {
    as: PropTypes.string,
    class_: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.objectOf(React),
}

export default Text;

