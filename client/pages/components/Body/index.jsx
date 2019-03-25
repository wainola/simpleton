import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './style.scss';

export default props => {
  console.log('Body', props);
  const { className } = props;
  const [Header, MainContent, Footer] = props.children;
  return (
    <Container>
      <Row>
        <div className="col">{Header}</div>
      </Row>
      <Row>
        <h1>BreadCrumbs</h1>
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
