import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export default ({ items }) => (
  <Breadcrumb>
    {items.map(element => (
      <Breadcrumb.Item href={element.url}>{element.text}</Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
