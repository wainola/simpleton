import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Body from './components/Body';
import MainContent from './components/MainContent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar';
import MainForm from './components/MainForm';
import Head from './Head';
import './styles.scss';

import getConfig from 'next/config';

const { API_KEY } = getConfig();

console.log('GET CONFIG', getConfig());

export default ({ items, formFields }) => (
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
          <MainForm />
        </Body>
      </Row>
    </Container>
  </React.Fragment>
);
