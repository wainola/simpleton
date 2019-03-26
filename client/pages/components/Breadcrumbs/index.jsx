import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './styles.scss';

export default ({ items }) => (
  <Breadcrumb className="main-breadcrumb">
    {items.map(element => (
      <Breadcrumb.Item href={element.url}>{element.text}</Breadcrumb.Item>
    ))}
  </Breadcrumb>
);
