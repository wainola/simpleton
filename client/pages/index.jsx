import React from 'react';
import Home from './Home';

export default () => {
  const sections = [
    {
      url: '#',
      text: 'Nosotros'
    },
    {
      url: '#',
      text: 'Consulte'
    },
    {
      url: '#',
      text: 'Asesorías'
    }
  ];

  const formFields = [
    { descriptor: 'Nombre', type: 'text' },
    { descriptor: 'Apellido', type: 'text' },
    { descriptor: 'Email', type: 'email' },
    { descriptor: 'Dirección', type: 'text' },
    { descriptor: 'Motivo de consulta', type: 'text' },
    { descriptor: 'Teléfono', type: 'phone' }
  ];
  return <Home items={sections} formFields={formFields} />;
};
