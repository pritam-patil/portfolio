import React from 'react';
import { Text } from '../../elements';
import {
  PortItem,
  PortModal,
} from '../../components';

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <Text as="h1">Check Out Some of My Works. </Text>
        {/* portfolio-wrapper */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <PortItem
            href="#modal-01"
            imgSrc="images/portfolio/readers-nest.png"
            title="Readers-Nest"
            subtitle="Web Design"
          />
          <PortItem
            href="#modal-02"
            imgSrc="images/portfolio/moview.png"
            title="Moview"
            subtitle="Web Development"
          />
          <PortItem
            href="#modal-03"
            imgSrc="images/portfolio/judge.svg"
            title="React-material-webpack-boiler"
            subtitle="Web project starter kit"
          />
          <PortItem
            href="#modal-04"
            imgSrc="images/portfolio/komique-relief.png"
            title="Komique-relief"
            subtitle="Web Development"
          />
          <PortItem
            href="#modal-05"
            imgSrc="https://cdn-images-1.medium.com/max/1600/1*TFZQzyVAHLVXI_wNreokGA.png"
            title="UX/Design"
            subtitle="App Design using Flutter"
          />
          <PortItem
            href="#modal-06"
            imgSrc="images/portfolio/crypto.jpg"
            title="CrypTracker"
            subtitle="Cryptocurrency Tracker (React-Native)"
          />
          <PortItem
            href="#modal-07"
            imgSrc="images/portfolio/yodone_base.jpg"
            title="YoDone - Simlpe ToDo lists"
            subtitle="ToDo app in React-Native"
          />
          <PortItem
            href="#modal-08"
            imgSrc="images/portfolio/news.jpg"
            title="InstaNews (News app)"
            subtitle="Simple location based news app in React-Native"
          />
        </div> {/* portfolio-wrapper end */}
      </div> {/* twelve columns end */}
      
      <PortModal 
        id="modal-01"
        src="images/portfolio/readers-nest.png"
        title="Readers-Nest"
        desc="This website is a tribute to webpage discovery platform, StumbleUpon.com. Topic based trending articles from Reddit.com can be found here."
        link="http://readers-nest.surge.sh/"
        categories="WebDesign, Content-Discovery"
        linkText="Visit Site"
      />
      <PortModal 
        id="modal-02"
        src="images/portfolio/moview.png"
        title="Moview"
        desc="The website can be used to discover moviews to watch. Apply category, movie length or rating filters to find the right movie."
        link="http://moview.surge.sh/"
        categories="WebDesign, Movies"
        linkText="Visit Site"
      />
      
      <PortModal 
        id="modal-03"
        src="https://github.com/pritam-patil/react-material-webpack-boiler/raw/master/src/static/images/favicon-194x194.png"
        title="RMW - React Starter kit"
        desc="This project can be utilized as a rapid prototyping kit for React projects. It is loaded with Material-UI design, webpack 4 bundling, storybook support, hooks for precommit and much more."
        link="http://github.com/pritam-patil/react-material-webpack-boiler/"
        categories="prototyping, Webdesign"
        linkText="View Project"
      />
      
      <PortModal 
        id="modal-04"
        src="images/portfolio/modals/komique-relief.png"
        title="Komique-relief : Your comic reader"
        desc="Read the latest comics from xkcd.com"
        link="http://komique-relief.surge.sh/"
        categories="Web Development, Comics"
        linkText="Visit Site"
      />

      <PortModal
        id="modal-05"
        flex
        title="UX/Design Tuts - Cloning UX of favorite apps."
        desc="These short projects took on some most favorite apps UX - Medium, WhatsApp and FoodPanda for learning design in Flutter."
        categories="Branding, Webdesign"
      />
      
      <PortModal 
        id="modal-06"
        src="images/portfolio/modals/crypto.jpg"
        title="CrypTracker - A native Cryptocurrency tracker app"
        desc="A mobile app to track your favorite Cryptocurrencies."
        link="#"
        categories="Branding, App-Design"
        linkText="View Project"
      />
      
     <PortModal 
        id="modal-07"
        src="images/portfolio/modals/yodone_modal.jpg"
        title="YoDone! - Your simple ToDo lists"
        desc="Simple ToDo list maker app tracking daily progress."
        link="#"
        categories="AppDesign, Tasks"
        linkText="View Project"
      />
      <PortModal 
        id="modal-08"
        src="images/portfolio/modals/news.jpg"
        title="InstaNews - Location based News Articles"
        desc="This app serves as your custom ad-free location targetted news articles delivery agent."
        link="#"
        categories="News, Content-Delivery, AppDesign"
        linkText="View Project"
      />     
    </div> {/* row End */}
  </section>
);

export default Portfolio;