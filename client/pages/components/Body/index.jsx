import React from 'react';
import { Container, Row, Breadcrumb } from 'react-bootstrap';
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
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
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
