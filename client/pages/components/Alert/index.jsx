import React from 'react';
import { Alert } from 'react-bootstrap';

export const CustomAlert = ({ value, descriptor }) => (
  <Alert variant="danger">Problemas con sus datos</Alert>
);

export default CustomAlert;
