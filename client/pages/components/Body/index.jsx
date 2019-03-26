import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumbs';
import './style.scss';

export default ({ items, children, className }) => {
  console.log('Body', children);
  const [Header, MainContent, Footer] = children;
  return (
    <Container>
      <Row>
        <div className="col">{Header}</div>
      </Row>
      <Row>
        <Breadcrumb items={items} />
      </Row>
      <Row>
        <div className={className}>
          <div className="col">{MainContent}</div>
          <div className="col">{Footer}</div>
        </div>
      </Row>
    </Container>
  );
};
