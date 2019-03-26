import React, { Component } from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import Input from '../Input';
import {
  nameValidator,
  lastNameValidator,
  emailValidator,
  addressValidator,
  queryReasonValidator,
  phoneValidator
} from '../../../Services/validators';
import './styles.scss';

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log('evt', evt.target.dataset.descriptor);
    const { descriptor } = evt.target.dataset;
    const { value } = evt.target;

    const validations = {
      name: undefined,
      lastname: undefined,
      email: undefined,
      address: undefined,
      reason: undefined,
      phone: undefined
    };

    if (descriptor === 'nombre') {
      validations.name = nameValidator(value);
    } else if (descriptor === 'apellido') {
      validations.lastname = lastNameValidator(value);
    } else if (descriptor === 'email') {
      validations.email = emailValidator(value);
    } else if (descriptor === 'dirección') {
      validations.address = addressValidator(value);
    } else if (descriptor === 'motivo de consulta') {
      validations.reason = queryReasonValidator(value);
    } else if (descriptor === 'teléfono') {
      validations.phone = phoneValidator(value);
    }

    console.log('validations', validations);
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