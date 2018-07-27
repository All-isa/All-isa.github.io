import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am an ambitious, creative, and resourceful full stack web developer who is driven to continuously learn new technologies and creative skills. I have a multifaceted background in customer service, photography, and entrepreneurship that has given me a strong ability to communicate effectively and multitask like a master. I've just recently completed an intensive 24 week coding bootcamp in which I gained more inspiration and knowledge than my brain thought possible.
            </p>
            <p>Beyond technology I am a mother to a feisty daughter, a foodie, a music lover and a treehugger. In my free time you might find me hiking, reading, learning new languages or expanding on previous knowledge, as well as exploring this wide world we all call home.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Allisa Liberto</span><br />
                  {/* <span>1600 Amphitheatre Parkway<br />
                    Mountain View, CA 94043 US */}
                  {/* </span><br /> */}
                  <span>(760)585-5358</span><br />
                  <span>allisaliberto@gmail.com</span>
                  {/* <span>anyone@website.com</span> */}
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};