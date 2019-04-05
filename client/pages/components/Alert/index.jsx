import React from 'react';
import { Alert } from 'react-bootstrap';

export const CustomAlert = ({ descriptor }) => (
  <Alert variant="danger">{`Ingrese correctamente su ${descriptor}.`}</Alert>
);

export default CustomAlert;
