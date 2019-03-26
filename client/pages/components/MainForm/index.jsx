import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Form from '../Form';
import Input from '../Input';

export default () => (
  <Container>
    <Row>
      <Card>
        <Card.Title>Contáctenos</Card.Title>
        <Card.Body>
          <Form>
            <Input type="text" title="Nombre" placeholder="ingrese su nombre" evt={undefined} />
          </Form>
        </Card.Body>
      </Card>
    </Row>
  </Container>
);
