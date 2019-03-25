import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Body from './components/Body';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar';
import Head from './Head';

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
    <Head />
    <Container fluid>
      <Row noGutters>
        <Col>
          <Navbar />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Body>
          <Header />
          <MainContent />
          <Footer />
        </Body>
      </Row>
    </Container>
  </React.Fragment>
);
