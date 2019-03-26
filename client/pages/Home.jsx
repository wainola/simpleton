import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Body from './components/Body';
import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar';
import Head from './Head';
import './styles.scss';

/**
 * HOME MUST HAVE
 * SOME NAVBAR
 * SOME MENU
 * SOME FORM
 * SOME DESCRIPTION WITH HARD CODED TEXT
 * SOME FOOTER
 */

export default ({ items }) => (
  <React.Fragment>
    <Head />
    <Container fluid>
      <Row>
        <Col>
          <Navbar items={items} />
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Body className="main-body" items={items}>
          <Header />
          <MainContent />
          <Footer />
        </Body>
      </Row>
    </Container>
  </React.Fragment>
);
