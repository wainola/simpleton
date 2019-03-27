import React from 'react';
import { Alert } from 'react-bootstrap';

export const CustomAlert = ({ value, descriptor }) => (
  <Alert variant={`${!value && 'danger'}`}>{`Ingrese correctamente el ${descriptor}`}</Alert>
);

export default CustomAlert;
