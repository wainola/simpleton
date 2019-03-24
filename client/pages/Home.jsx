import React from 'react';
import Body from './components/Body';
import MainContent from './components/MainContent';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

/**
 * HOME MUST HAVE
 * SOME NAVBAR
 * SOME MENU
 * SOME FORM
 * SOME DESCRIPTION WITH HARD CODED TEXT
 * SOME FOOTER
 */

export default () => (
  <React.Fragment>
    <Navbar />
    <Body>
      <Header />
      <MainContent />
      <Footer />
    </Body>
  </React.Fragment>
);
