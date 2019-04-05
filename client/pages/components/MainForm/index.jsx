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
    this.state = {
      fields: {},
      validFields: {
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        razon: true,
        direccion: true
      }
    };
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
        acc[item.key] = item.isValid;
      }
      return acc;
    }, {});

    this.setState({
      ...this.state,
      validFields: {
        ...this.state.validFields,
        ...validData
      }
    });
  }

  render() {
    return (
      <Container className="form-container">
        <Row>
          <Card>
            <Card.Title className="form-title">Contáctenos</Card.Title>
            <Card.Body>
              <CustomForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                CustomAlert={CustomAlert}
                validFields={this.state.validFields}
              />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export const CustomForm = ({ handleChange, handleSubmit, CustomAlert, validFields }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Input
          type="text"
          name="nombre"
          placeholder="ingrese su nombre"
          title="Nombre"
          handleChange={handleChange}
        />
        {!validFields.nombre && <CustomAlert descriptor="nombre" />}
        <Input
          type="text"
          name="apellido"
          placeholder="ingrese su su apellido"
          title="Apellido"
          handleChange={handleChange}
        />
        {!validFields.apellido && <CustomAlert descriptor="apellido" />}
        <Input
          type="email"
          name="email"
          placeholder="ingrese su correo electrónico"
          title="Correo electónico"
          handleChange={handleChange}
        />
        {!validFields.email && <CustomAlert descriptor="email" />}
        <Input
          type="phone"
          name="telefono"
          placeholder="ingrese su número de teléfono"
          title="Teléfono"
          handleChange={handleChange}
        />
        {!validFields.telefono && <CustomAlert descriptor="teléfono" />}
        <Input
          type="textarea"
          name="razon"
          placeholder="ingrese el motivo de su consulta"
          title="Motivo de consulta"
          handleChange={handleChange}
        />
        {!validFields.razon && <CustomAlert descriptor="motivo de consulta" />}
        <Input
          type="adddress"
          name="direccion"
          placeholder="ingrese su dirección"
          title="Dirección"
          handleChange={handleChange}
        />
        {!validFields.direccion && <CustomAlert descriptor="dirección" />}
      </Form.Group>
      <Form.Group>
        <Button variant="success" type="submit">
          Enviar!
        </Button>
      </Form.Group>
    </Form>
  );
};

export default MainForm;
