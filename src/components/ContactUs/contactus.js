import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    return (
        <section id="contact">
          <div className="row section-intro">
            <div className="col-twelve">
              <h5>Contact</h5>
              <h1>I'd Love To Hear From You.</h1>
              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
            </div> 
          </div>
          <div className="row contact-form">
            <div className="col-twelve">
              <form name="contactForm" id="contactForm" method="post" action>
                <fieldset>
                  <div className="form-field">
                    <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue minLength={2} required />
                  </div>
                  <div className="form-field">
                    <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue required />
                  </div>
                  <div className="form-field">
                    <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue />
                  </div>                       
                  <div className="form-field">
                    <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required defaultValue={""} />
                  </div>                      
                  <div className="form-field">
                    <button className="submitform">Submit</button>
                    <div id="submit-loader">
                      <div className="text-loader">Sending...</div>                             
                      <div className="s-loader">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div id="message-warning">            	
              </div>
              <div id="message-success">
                <i className="fa fa-check" />Your message was sent, thank you!<br />
              </div>
            </div>
          </div> 
          <div className="row contact-info">
            <div className="col-four tab-full collapse">
              <div className="icon">
                <i className="icon-mail" />
              </div>
              <h5>Email Me:</h5>
              <p>allisaliberto@gmail.com</p>
            </div>
            <div className="col-four tab-full">
              <div className="icon">
                <i className="icon-phone" />
              </div>
              <h5>Call Me:</h5>
              <p>Phone: (760) 585 5358<br />
              </p>
            </div>
          </div> 
        </section> 
      );
    };
}