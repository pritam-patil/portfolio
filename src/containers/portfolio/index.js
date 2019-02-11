import React from 'react';
/* Foodgasm */
/* Readers-nest */
/* Moview */
/* Native Crypto tracker */
/* YoDone app */

const Slide = ({alt, src}) => (
  <img
    style={{height: 360, width: 236}}
    alt={alt}
    src={src}
  />
);

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>
        {/* portfolio-wrapper */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title>
                <Slide                  
                  alt="readers-nest" 
                  src="images/portfolio/readers-nest.png" 
                />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee (Readers-Nest)</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title>
                <Slide
                  alt="moview" 
                  src="images/portfolio/moview.png" 
                />                
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Console (Moview) </h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title>
                <Slide
                  alt="react-material-webpack-boilerplate"
                  src="images/portfolio/judge.svg" 
                />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Judah (rmw) </h5>
                    <p>Webdesign</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/readers-nest.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee (Readers-Nest)</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-05" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/readers-nest.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee (Readers-Nest)</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-06" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/readers-nest.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee (Readers-Nest)</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-07" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/readers-nest.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee (Readers-Nest)</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-08" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/readers-nest.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Coffee (Readers-Nest)</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div>  {/* item end */}
        </div> {/* portfolio-wrapper end */}
      </div> {/* twelve columns end */}
      {/* Modal Popup
	      --------------------------------------------------------------- */}
      <div id="modal-01" className="popup-modal mfp-hide">
        <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-01 End */}
      <div id="modal-02" className="popup-modal mfp-hide">
        <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-02 End */}
      <div id="modal-03" className="popup-modal mfp-hide">
        <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-03 End */}
      <div id="modal-04" className="popup-modal mfp-hide">
        <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-04 End */}
      <div id="modal-05" className="popup-modal mfp-hide">
        <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-05 End */}
      <div id="modal-06" className="popup-modal mfp-hide">
      <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-06 End */}
      <div id="modal-07" className="popup-modal mfp-hide">
      <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-07 End */}
      <div id="modal-08" className="popup-modal mfp-hide">
      <div className="description-box">
          <h4>Coffee Cup (Readers-nest)</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">Visit site</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-01 End */}
    </div> {/* row End */}
  </section>
);

export default Portfolio;