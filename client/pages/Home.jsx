import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Body from './components/Body';
import Header from './components/Header/Header';
import MainForm from './components/MainForm';
import Description from './components/Description';
import Navbar from './components/NavBar';
import Head from './Head';
import './styles.scss';

import getConfig from 'next/config';

const { API_KEY } = getConfig();

console.log('GET CONFIG', getConfig());

export default ({ items, formFields }) => (
  <React.Fragment>
    <Head />
    {/* <Container>
      <Row>
        <Navbar />
      </Row>
    </Container> */}
    <Container fluid>
      <Header />
    </Container>
    <Container fluid>
      <Row>
        <MainForm />
      </Row>
    </Container>
    <Container>
      <Row>
        <Description />
      </Row>
    </Container>
  </React.Fragment>
);


DIVORCIOS
DIVORCIO MUTUO ACUERDO
DIVORCIOS UNILATERALES

SEPARACION JUDIFICIAL
LUQUIDACION DE SOCIEDAD CONYUGAL

REGULACION DE ALIMENTOS
RELACION DIRECTA Y REGULAR
CUIDADO PERSONAL

TRANSACCIONES