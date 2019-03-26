import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumbs';
import './style.scss';

export default ({ items, children, className }) => {
  const [Header, MainContent, MainForm, Footer] = children;
  return (
    <Container>
      <Row>
        <div className="col">{Header}</div>
      </Row>
      <Row>
        <Breadcrumb items={items} />
      </Row>
      <Row className={className}>{MainContent}</Row>
      <Row className={className}>{MainForm}</Row>
      <Row className={className}>{Footer}</Row>
    </Container>
  );
};
