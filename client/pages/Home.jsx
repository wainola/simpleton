import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Body from './components/Body';
import Header from './components/Header/Header';
import MainForm from './components/MainForm';
import Description from './components/Description';
import Head from './Head';
import './styles.scss';

import getConfig from 'next/config';

const { API_KEY } = getConfig();

console.log('GET CONFIG', getConfig());

export default ({ items, formFields }) => (
  <React.Fragment>
    <Head />
    <Container fluid>
      <Header />
    </Container>
    <Container>
      <Row>
        <Description />
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <MainForm />
      </Row>
    </Container>
  </React.Fragment>
);
