import React, { Component } from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import Input from '../Input';
import CustomAlert from '../Alert';
import validations from '../../../Services/validators';

if (process.env.NODE_ENV !== 'test') {
  require('./styles.scss');
}

export class MainForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.triggerAlert = this.triggerAlert.bind(this);
    this.state = {
      fields: {},
      invalidData: []
    };
  }

  triggerAlert() {
    console.log('tiggerAlert');
  }

  handleChange(evt) {
    evt.preventDefault();

    const { name, value } = evt.target;

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const { fields } = this.state;

    const validData = validations(fields).reduce((acc, item) => {
      const valid = !item.isValid && item;
      if (valid) {
        acc.push(item);
      }
      return acc;
    }, []);

    if (validData.length !== 0) {
      this.setState(
        {
          invalidData: validData
        },
        () => this.triggerAlert()
      );
    }
  }

  render() {
    return (
      <Container className="form-container">
        <Row>
          <Card>
            <Card.Title className="form-title">Contáctenos</Card.Title>
            <Card.Body>
              <CustomForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export const CustomForm = ({ handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Input
        type="text"
        name="nombre"
        placeholder="ingrese su nombre"
        title="Nombre"
        handleChange={handleChange}
      />
      <Input
        type="text"
        name="apellido"
        placeholder="ingrese su su apellido"
        title="Apellido"
        handleChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="ingrese su correo electrónico"
        title="Correo electónico"
        handleChange={handleChange}
      />
      <Input
        type="phone"
        name="telefono"
        placeholder="ingrese su número de teléfono"
        title="Teléfono"
        handleChange={handleChange}
      />
      <Input
        type="textarea"
        name="razon"
        placeholder="ingrese el motivo de su consulta"
        title="Motivo de consulta"
        handleChange={handleChange}
      />
      <Input
        type="adddress"
        name="direccion"
        placeholder="ingrese su dirección"
        title="Dirección"
        handleChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Button variant="success" type="submit">
        Enviar!
      </Button>
    </Form.Group>
  </Form>
);

export default MainForm;
