import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Input from '../Input';

export const MainFormUX = ({ handleChange, handleSubmit, CustomAlert, validFields, reference }) => {
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

export default MainFormUX;
