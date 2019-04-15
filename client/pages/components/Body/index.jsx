import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import './style.scss';

export default ({ items, children, className }) => {
  const [Header, MainContent, MainForm, Footer] = children;
  return (
    <Container>
      <Row>
        <div className="col">{Header}</div>
      </Row>
      <Row>{MainContent}</Row>
    </Container>
  );
};
