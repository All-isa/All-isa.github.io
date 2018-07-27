import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
        <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
          <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
          <ul id='nav' className='nav'>
            <li className='current'><a className='smoothscroll' href='#home'>Home</a></li>
            <li><a className='smoothscroll' href='#about'>About</a></li>
            <li><a className='smoothscroll' href='#resume'>Resume</a></li>
            <li><a className='smoothscroll' href='#portfolio'>Portfolio</a></li>
            {/* <li><a className='smoothscroll' href='#testimonials'>Testimonials</a></li> */}
            {/* <li><a className='smoothscroll' href='#contact'>Contact</a></li> */}
          </ul>
        </nav>
        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>I'm Allisa.</h1>
            <h3>I'm a San Diego based <span>web developer</span>, <span>UI/UX enthusiast</span> and <span>photographer</span>. <a className='smoothscroll' href='#about'>Start scrolling</a>
              and learn more <a className='smoothscroll' href='#about'>about me</a>.</h3>
            <hr />
            <ul className='social'>
              <li><a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/allisa.robb'><i className='fa fa-facebook' /></a></li>
              <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/Allisamichelle'><i className='fa fa-twitter' /></a></li>
              <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/All-isa'><i className='fa fa-github'></i></a></li>
              <li><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/allisa-liberto'><i className='fa fa-linkedin'></i></a></li>
              {/* <li><a href='#'><i className='fa fa-google-plus' /></a></li> */}
            </ul>
          </div>
        </div>
        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'><i className='icon-down-circle' /></a>
        </p>
      </header>
    );
  }
};