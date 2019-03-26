import React, { Component } from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import Input from '../Input';
import './styles.scss';

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log('evt', evt.target.dataset.descriptor);
  }

  handleSubmit(evt) {}

  render() {
    console.log('mainFormProps', this.props);
    const { formFields } = this.props;
    return (
      <Container className="form-container">
        <Row>
          <Card>
            <Card.Title className="form-title">Contáctenos</Card.Title>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  {Array.isArray(formFields) &&
                    formFields.map((element, idx) => (
                      <Form.Control
                        key={idx}
                        as={Input}
                        type={element.type}
                        title={element.descriptor}
                        placeholder={`Ingrese su ${element.descriptor.toLowerCase()}`}
                        handleChange={this.handleChange}
                        descriptor={element.descriptor}
                      />
                    ))}
                </Form.Group>
                <Form.Group>
                  <Button variant="success" type="submit">
                    Enviar!
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
