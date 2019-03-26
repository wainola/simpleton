import React, { Component } from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import Input from '../Input';

export default class MainForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('mainFormProps', this.props);
    const { formFields } = this.props;
    return (
      <Container>
        <Row>
          <Card>
            <Card.Title>Contáctenos</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group>
                  {Array.isArray(formFields) &&
                    formFields.map((element, idx) => (
                      <Form.Control
                        key={idx}
                        as={Input}
                        type={element.type}
                        title={element.descriptor}
                        placeholder={`Ingrese su ${element.descriptor}`}
                        evt={undefined}
                      />
                    ))}
                </Form.Group>
                <Form.Group>
                  <Button type="success">Enviar!</Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
