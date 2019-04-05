import React from 'react';
/* Foodgasm */
/* Readers-nest */
/* Moview */
/* Native Crypto tracker */
/* YoDone app */

const Slide = ({alt, src}) => (
  <img
    style={{height: 324, width: 236, padding: 8}}
    alt={alt}
    src={src}
  />
);

const Tab = ({ src, title }) => (
  <a href={src} rel="noopener noreferrer" target="_blank">
    { title }
  </a>
);

const FlexSides = () => (
  <div className="fslide-container">
    <img src="https://github.com/pritam-patil/foodpanda_ui_clone/raw/master/android/screens/home_dish.jpg" ></img>
    <img src="https://github.com/pritam-patil/medium_ui_clone/raw/master/android/screens/home.png" ></img>
    <img src="https://github.com/pritam-patil/whatsapp_ui_clone/raw/master/android/screens/chats.png" ></img>
  </div>
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
                    <h5>Readers-Nest</h5>
                    <p>Web Design</p>
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
                    <h5>Moview </h5>
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
                    <h5> React-material-webpack-boiler </h5>
                    <p> Web project starter kit </p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title>
              <Slide alt="readers-nest" src="images/portfolio/komique-relief.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Komique-relief</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-05" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="https://cdn-images-1.medium.com/max/1600/1*TFZQzyVAHLVXI_wNreokGA.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>UX/Design</h5>
                    <p>App Design using Flutter</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-06" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/crypto.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>CrypTracker</h5>
                    <p>Cryptocurrency Tracker (React-Native)</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-07" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/yodone_base.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>YoDone - Simple ToDo lists</h5>
                    <p>ToDo app in React-Native</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-08" title>
              <img style={{height: 400, width: 236}} alt="readers-nest" src="images/portfolio/news.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>InstaNews (News app)</h5>
                    <p>Simple location based news app in React-Native</p>
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
        <img className="modal-image" src="images/portfolio/readers-nest.png" alt="" />
        <div className="description-box">
          <h4>Readers-Nest</h4>
          <p> This website is a tribute to webpage discovery platform, StumbleUpon.com. Topic based trending articles from Reddit.com can be found here.</p>
          <span className="categories"><i className="fa fa-tag" />WebDesign, Content-Discovery</span>
        </div>
        <div className="link-box">
          <Tab src="http://readers-nest.surge.sh/" title="Visit Site" />
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-01 End */}
      <div id="modal-02" className="popup-modal mfp-hide">
        <img className="modal-image" src="images/portfolio/moview.png" alt="" />
        <div className="description-box">
          <h4>Moview</h4>
          <p>The website can be used to discover moviews to watch. Apply category, movie length or rating filters to find the right movie.</p>
          <span className="categories"><i className="fa fa-tag" />WebDesign, Movies</span>
        </div>
        <div className="link-box">
          <Tab src="http://moview.surge.sh/" title="Visit Site"/>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-02 End */}
      <div id="modal-03" className="popup-modal mfp-hide">
        <img class="scale-with-grid" src="https://github.com/pritam-patil/react-material-webpack-boiler/raw/master/src/static/images/favicon-194x194.png" alt="rmw" />
        <div className="description-box">
          <h4>RMW - React Starter kit</h4>
          <p>This project can be utilized as a rapid prototyping kit for React projects. It is loaded with Material-UI design, webpack 4 bundling, storybook support, hooks for precommit and much more.</p>
          <span className="categories"><i className="fa fa-tag" />prototyping, Webdesign</span>
        </div>
        <div className="link-box">
          <Tab src="http://github.com/pritam-patil/react-material-webpack-boiler/" title="Visit Project" />
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-03 End */}
      <div id="modal-04" className="popup-modal mfp-hide">
        <img className="modal-image" src="images/portfolio/modals/komique-relief.png" alt="" />
        <div className="description-box">
          <h4>Komique-relief : Your comic reader</h4>
          <p> Read the latest comics from xkcd.com </p>
          <span className="categories"><i className="fa fa-tag" />Web Development, Comics</span>
        </div>
        <div className="link-box">
          <Tab src="http://cashtrail.surge.sh/" title="Visit Site" />
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-04 End */}
      <div id="modal-05" className="popup-modal mfp-hide">
        <FlexSides />
        <div className="description-box">
          <h4>UX/Design Tuts - Cloning UX of favorite apps.</h4>
          <p>These short projects took on some most favorite apps UX - Medium, WhatsApp and FoodPanda for learning design in Flutter.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box wrapped">
          <Tab src="https://github.com/pritam-patil/foodpanda_ui_clone" title="FoodPanda" />
          <Tab src="https://github.com/pritam-patil/medium_ui_clone" title="Medium" />
          <Tab src="https://github.com/pritam-patil/whatsapp_ui_clone" title="WhatsApp" />
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-05 End */}
      <div id="modal-06" className="popup-modal mfp-hide">
        <img className="modal-image" src="images/portfolio/modals/crypto.jpg" alt="" />
        <div className="description-box">
          <h4>CrypTracker - A native Cryptocurrency tracker app</h4>
          <p>A mobile app to track your favorite Cryptocurrencies.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="#">View Project</a>
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
     </div>{/* modal-06 End */}
      <div id="modal-07" className="popup-modal mfp-hide">
        <img className="modal-image" src="images/portfolio/modals/yodone_modal.jpg" alt="" />
        <div className="description-box">
          <h4>YoDone! - Your simple ToDo lists</h4>
          <p>Simple ToDo list maker app tracking daily progress.</p>
          <span className="categories"><i className="fa fa-tag" />AppDesign</span>
        </div>
        <div className="link-box">
          <Tab src="#" title="View Project" />
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-07 End */}
      <div id="modal-08" className="popup-modal mfp-hide">
        <img className="modal-image" src="images/portfolio/modals/news.jpg" alt="" />
        <div className="description-box">
          <h4>InstaNews - Location based News Articles</h4>
          <p>This app serves as your custom ad-free location targetted news articles delivery agent</p>
          <span className="categories"><i className="fa fa-tag" />News, Content-Delivery, AppDesign</span>
        </div>
        <div className="link-box">
          <Tab src="#" title="View Project" />
          <a className="popup-modal-dismiss" href='#'>Close</a>
        </div>
      </div>{/* modal-01 End */}
    </div> {/* row End */}
  </section>
);

export default Portfolio;