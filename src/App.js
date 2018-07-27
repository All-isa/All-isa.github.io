import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Resume from './components/Resume/resume';
import Portfolio from './components/Portfolio/portfolio';
import Testimonials from  './components/Testimonials/testimonials';
// import ContactUs from './components/ContactUs/contactus';
// import Footer from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        {/* <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}
export default App;