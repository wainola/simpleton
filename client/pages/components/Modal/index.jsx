import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const CustomModal = ({ show, handleClick, message }) => (
  <Modal show={show} centered>
    <Modal.Body>{message}</Modal.Body>
    <Button variant="primary" onClick={handleClick}>
      Cerrar
    </Button>
  </Modal>
);

export default CustomModal;
