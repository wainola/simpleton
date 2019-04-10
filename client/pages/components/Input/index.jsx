import React from 'react';
import { Form } from 'react-bootstrap';

export const Input = ({ type, title, name, placeholder, handleChange = undefined }) => (
  <React.Fragment>
    <Form.Label>{title}</Form.Label>
    <Form.Control
      as="input"
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  </React.Fragment>
);

export default Input;
