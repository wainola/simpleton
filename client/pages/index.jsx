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

  const formFields = ['name', 'lastname', 'email', 'address', 'reason', 'phone'];
  return <Home items={sections} formFields={formFields} />;
};
