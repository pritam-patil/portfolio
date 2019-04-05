import React from 'react'
import PropTypes from 'prop-types';

const Tab = ({ src, title }) => (
    <a href={src} rel="noopener noreferrer" target="_blank">
      { title }
    </a>
);

const WrappedLink = () => {
    return (
        <div className="link-box wrapped">
            <Tab src="https://github.com/pritam-patil/foodpanda_ui_clone" title="FoodPanda" />
            <Tab src="https://github.com/pritam-patil/medium_ui_clone" title="Medium" />
            <Tab src="https://github.com/pritam-patil/whatsapp_ui_clone" title="WhatsApp" />
            <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
    );
}

const FlexSides = () => (
    <div className="fslide-container">
      <img src="https://github.com/pritam-patil/foodpanda_ui_clone/raw/master/android/screens/home_dish.jpg" ></img>
      <img src="https://github.com/pritam-patil/medium_ui_clone/raw/master/android/screens/home.png" ></img>
      <img src="https://github.com/pritam-patil/whatsapp_ui_clone/raw/master/android/screens/chats.png" ></img>
    </div>
  );


const Modal = props => {
    const {
        categories,
        desc,
        flex,
        id,
        link,
        linkText,
        src,
        title,
    } = props;

    const slideComp = (flex && <FlexSides />)
        || <img className="modal-image" src={src} alt={title} />;

    const linkComp = 
        (flex && <WrappedLink />)
        || (
            <div className="link-box">
                <Tab src={link} title={linkText} />
                <a className="popup-modal-dismiss" href='#'>Close</a>
            </div>);
    
    return (
        <div id={id} className="popup-modal mfp-hide">
            { slideComp }
            <div className="description-box">
            <h4>{ title }</h4>
            <p>{ desc } </p>
            <span className="categories"><i className="fa fa-tag" />{ categories }</span>
            </div>
            { linkComp }
        </div>
    )
}

Modal.defaultProps = {
    flex: false,
};


Modal.propTypes = {
    flex: PropTypes.bool,
}

export default Modal;
