import React from 'react';
import { Alert } from 'react-bootstrap';

export const CustomAlert = ({ validation }) => (
  <Alert variant={`${!validation && 'danger'}`}>Ingrese correctamente el...</Alert>
);

export default CustomAlert;
