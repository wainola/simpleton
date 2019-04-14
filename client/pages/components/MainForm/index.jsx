import React, { Component } from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import { v4 } from 'uuid';
import Input from '../Input';
import CustomAlert from '../Alert';
import CustomModal from '../Modal';
import validations from '../../../Services/validators';
import { withFirebase } from '../Firebase';

if (process.env.NODE_ENV !== 'test') {
  require('./styles.scss');
}

export class MainForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cleanForm = this.cleanForm.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.handleModalDispatch = this.handleModalDispatch.bind(this);
    this.state = {
      fields: {},
      validFields: {
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
        razon: true,
        direccion: true
      },
      showModal: false
    };
    this.firebase = undefined;
    this.form = React.createRef();
  }

  componentDidMount() {
    const { firebase: Firebase } = this.props;
    this.firebase = new Firebase();

    this.firebase.signInAnonymously().catch(err => console.log('error:', err));

    // ATTACH THE ANON USER TO THE WINDOW OBJECT
    this.firebase.getAuthStateChange();
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

  cleanForm() {
    this.form.current.reset();
  }

  async triggerModal() {
    return this.setState({
      showModal: !this.state.showModal
    });
  }

  handleModalDispatch() {
    this.setState({
      showModal: !this.state.showModal
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

    if (Object.values(validData).length !== 0) {
      return this.setState(
        {
          validFields: {
            ...this.state.validFields,
            ...validData
          }
        },
        () => {
          // HERE TRIGGER ACTIONS RELATED TO INVALID DATA FIELDS
        }
      );
    }

    // ELSE THE DATA IS VALID WE CAN CONTINUE
    // THIS IS FUCKING HIDEOUS!!
    const fieldValues = Object.values(this.state.fields);
    const truthines = fieldValues.every(Boolean);

    if (truthines) {
      const { nombre, apellido, email, telefono, razon, direccion } = this.state.fields;

      const { user } = window;
      const { uid } = user;

      this.firebase
        .setClient(uid)
        .set({
          nombre,
          apellido,
          email,
          telefono,
          razon,
          direccion
        })
        .then(async () => {
          return this.triggerModal().then(() => this.cleanForm());
        });
    }
  }

  render() {
    const { showModal } = this.state;
    console.log('showModal', showModal);
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
                reference={this.form}
              />
              <CustomModal
                show={showModal}
                message="Datos guardados con exito"
                handleClick={this.handleModalDispatch}
              />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export const CustomForm = ({ handleChange, handleSubmit, CustomAlert, validFields, reference }) => {
  return (
    <Form onSubmit={handleSubmit} ref={reference}>
      <Form.Group className="form-group">
        <Input
          className="form-control"
          type="text"
          name="nombre"
          placeholder="ingrese su nombre"
          title="Nombre"
          handleChange={handleChange}
        />
        {!validFields.nombre && <CustomAlert descriptor="nombre" />}
        <Input
          className="form-control"
          type="text"
          name="apellido"
          placeholder="ingrese su su apellido"
          title="Apellido"
          handleChange={handleChange}
        />
        {!validFields.apellido && <CustomAlert descriptor="apellido" />}
        <Input
          className="form-control"
          type="email"
          name="email"
          placeholder="ingrese su correo electrónico"
          title="Correo electónico"
          handleChange={handleChange}
        />
        {!validFields.email && <CustomAlert descriptor="email" />}
        <Input
          className="form-control"
          type="text"
          name="telefono"
          placeholder="ingrese su número de teléfono"
          title="Teléfono"
          handleChange={handleChange}
        />
        {!validFields.telefono && <CustomAlert descriptor="teléfono" />}
        <Input
          className="form-control"
          type="textarea"
          name="razon"
          placeholder="ingrese el motivo de su consulta"
          title="Motivo de consulta"
          handleChange={handleChange}
        />
        {!validFields.razon && <CustomAlert descriptor="motivo de consulta" />}
        <Input
          className="form-control"
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

export default withFirebase(MainForm);
