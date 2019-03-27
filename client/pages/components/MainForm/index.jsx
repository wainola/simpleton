import React, { Component } from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';
import Input from '../Input';
import CustomAlert from '../Alert';
import {
  nameValidator,
  lastNameValidator,
  emailValidator,
  addressValidator,
  queryReasonValidator,
  phoneValidator
} from '../../../Services/validators';

if (process.env.NODE_ENV !== 'test') {
  require('./styles.scss');
}

export class MainForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      validations: [
        {
          descriptor: 'Nombre',
          value: undefined,
          num: 0
        },
        {
          descriptor: 'Apellido',
          value: undefined,
          num: 1
        },
        {
          descriptor: 'Email',
          value: undefined,
          num: 2
        },
        {
          descriptor: 'Dirección',
          value: undefined,
          num: 3
        },
        {
          descriptor: 'Motivo de consulta',
          value: undefined,
          num: 4
        },
        {
          descriptor: 'Teléfono',
          value: undefined,
          num: 5
        }
      ],
      triggerAlert: []
    };
  }

  handleChange(evt) {
    const { descriptor } = evt.target.dataset;
    const { value } = evt.target;

    const { validations } = this.state;

    if (descriptor === 'nombre') {
      validations[0].value = nameValidator(value);
    } else if (descriptor === 'apellido') {
      validations[1].value = lastNameValidator(value);
    } else if (descriptor === 'email') {
      validations[2].value = emailValidator(value);
    } else if (descriptor === 'dirección') {
      validations[3].value = addressValidator(value);
    } else if (descriptor === 'motivo de consulta') {
      validations[4].value = queryReasonValidator(value);
    } else if (descriptor === 'teléfono') {
      validations[5].value = phoneValidator(value);
    }

    this.setState({
      validations
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { validations } = this.state;

    console.log(validations);

    const validData = validations.every(e => !!e.value);

    console.log('validData', validData);

    if (!validData) {
      const falsies = validations.filter(e => !e.value);

      this.setState({ triggerAlert: [...falsies] }, () =>
        console.log('this.state', this.state.triggerAlert)
      );

      console.log('falsies', falsies);
    }

    // if (values.length !== 0) {
    //   const validData = values.every(e => !!e);

    //   console.log('true::::', validData, this.state.validations);

    //   // TODO: THIS IS THE PLACE WHEN WE SEND THE QUERY TO THE GRAPH SERVER
    // }
  }

  render() {
    // console.log('mainFormProps', this.props);
    const { formFields } = this.props;

    console.log('formFields', formFields);

    const { triggerAlert } = this.state;

    return (
      <Container className="form-container">
        <Row>
          <Card>
            <Card.Title className="form-title">Contáctenos</Card.Title>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  {Array.isArray(formFields) &&
                    formFields.map((element, idx) => {
                      let item;

                      if (triggerAlert.length !== 0) {
                        item = triggerAlert.filter(e => e.descriptor === element.descriptor);
                      }

                      return (
                        <Form.Control
                          key={idx}
                          as={Input}
                          type={element.type}
                          title={element.descriptor}
                          placeholder={`Ingrese su ${element.descriptor.toLowerCase()}`}
                          handleChange={this.handleChange}
                          descriptor={element.descriptor}
                          CustomAlert={CustomAlert}
                          validData={item}
                        />
                      );
                    })}
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

export default MainForm;
