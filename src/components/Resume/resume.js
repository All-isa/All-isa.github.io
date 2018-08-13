import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
        <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Texas at Austin</h3>
                <p className="info">Coding Boot Camp<span>•</span> <em className="date">July 2018</em></p>
                <p>
                Full Stack Web Development Bootcamp – Completed 24-week intensive course entirely focused on creating web applications from theory to production.
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Mira Costa College</h3>
                <p className="info">A.A Liberal Arts<span>•</span> <em className="date">May 2015</em></p>
                <p>
                AA Liberal Arts (transfer degree) Major GPA 3.7. Phi Theta Kappa Honor Society for academic accomplishment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                <h3>Web Consultant</h3>
                <p className="info">Web Developer<span>•</span> <em className="date">Jan 2018 - present</em></p>
                <p>
                Created mobile friendly websites/single-page applications. Designed, constructed, and implemented HTML and JavaScript web applications/websites using a variety of styles, templates, and custom CSS files. Customize and edited graphics within Adobe creative applications to meet project needs.
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Ironsmith Athletics</h3>
                <p className="info">COO and Photographer<span>•</span> <em className="date">April 2015 - present</em></p>
                <p>
                Oversaw daily fulfillments, coordinated production, collaborated on brand development. Organized and created photography for productions and social media requirements.
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Pacific Dental Services</h3>
                <p className="info">Benefits Coordinator<span>•</span> <em className="date">November 2015 - July 2016</em></p>
                <p>
                Managed and collaborated with complex teams to ensure best possible experience for multiple clients at many stages of treatement. Excelled operating at efficient levels of multitasking and communication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Technical Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>HTML, CSS, Bootstrap, JavaScript, jQuery, Node.js, GitHub, MySQL, Firebase, APIs, JSON, AJAX, CLI, MongoDB, Express, React.js, PHP, Python, Agile Development, Adobe Creative Suite.
            </p>
          </div>
        </div>
      </section>
    );
  }
};