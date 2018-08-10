import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <p>Click each project to learn more.</p>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/stockmarketpets.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Stock Market Pets</h5>
                        <p>Web Developemnt </p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/localink.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Local Ink</h5>
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
                    <img alt src="images/portfolio/clickygame.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Clicky-Game</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/takeahike.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Take-A-Hike</h5>
                        <p>Web Developemnt</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/usaquiz.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>USA Geography Quiz</h5>
                        <p>Web Developemnt</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> item end */}
              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/sunsetscraper.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Webscraper</h5>
                        <p>Web Developemnt</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> item end */}
              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt src="images/portfolio/origami.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>The Great Outdoors</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt src="images/portfolio/retrocam.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Family</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            {/* <img className="scale-with-grid" src="images/portfolio/modals/stockmarketpets.jpg" alt /> */}
            <div className="description-box">
              <h4>Stock Market Pets</h4>
              <p>An online game designed to make learning the basic skills of the stock market not so intimidating.</p>
              <span className="categories"><i className="fa fa-tag" />Full Stack Developer, Brand Manager, Feature Manager, MERN Stack</span>
            </div>
            <div className="link-box">
              <a href="http://www.stockmarketpets.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            {/* <img className="scale-with-grid" src="images/portfolio/modals/localink.jpg" alt /> */}
            <div className="description-box">
              <h4>Local Ink</h4>
              <p>A site for clients to find the perfect artist for their next tattoo. Artists can register and create a profile. Clients can search the database of artists and easily compare their strengths and portfolio images.</p>
              <span className="categories"><i className="fa fa-tag" />Branding, Full Stack Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://pure-shelf-25877.herokuapp.com">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            {/* <img className="scale-with-grid" src="images/portfolio/modals/clickygame.jpg" alt /> */}
            <div className="description-box">
              <h4>Clicky Game</h4>
              <p>A game created using React.js that shows you 12 photos. The challenge is to click each photo once while they randomize with every click. A lot more challenging than it seems. Try it out!</p>
              <span className="categories"><i className="fa fa-tag" />React</span>
            </div>
            <div className="link-box">
              <a href="https://all-isa.github.io/clicky-game/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            {/* <img className="scale-with-grid" src="images/portfolio/modals/takeahike.jpg" alt /> */}
            <div className="description-box">
              <h4>Take-A-Hike</h4>
              <p>A site created to make it easy to find a local hike that includes weather details and location information, so no matter where you go, you can find an outdoor adventure.</p>
              <span className="categories"><i className="fa fa-tag" />HTML, CSS, APIs, JavaScript</span>
            </div>
            <div className="link-box">
              <a href="https://all-isa.github.io/WAAG/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            {/* <img className="scale-with-grid" src="images/portfolio/modals/usaquiz.jpg" alt /> */}
            <div className="description-box">
              <h4>USA Geography Quiz</h4>
              <p>A timed trivia game created with Bootstrap and Javascript to challenge your knowledge of US geography.</p>
              <span className="categories"><i className="fa fa-tag" />Javascript</span>
            </div>
            <div className="link-box">
              <a href="https://all-isa.github.io/triviagame">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          {/* <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/sunsetscraper.jpg" alt />
            <div className="description-box">
              <h4>Sunset Webscraper</h4>
              <p>Created to scrape articles using mongoose and cheerio from Sunset Magazine.</p>
              <span className="categories"><i className="fa fa-tag" />Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://secret-ridge-23735.herokuapp.com/articles">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>modal-06 End */}
          {/* <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
            <div className="description-box">
              <h4>The Great Outdoors</h4>
              <p>A few photography landscape photogrpahy pieces.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>modal-07 End */}
          {/* <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
            <div className="description-box">
              <h4>Family Photography</h4>
              <p>A few family photos from past clients.</p>
              <span className="categories"><i className="fa fa-tag" />Photography</span>
            </div>
            <div className="link-box">
              <a href="http://www.behance.net">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>modal-08 End */}
        </div> {/* row End */}
      </section>
    );
  }
};