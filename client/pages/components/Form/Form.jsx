import React from 'react';

export default ({ handleSubmit, children }) => (
  <form onSubmit={evt => handleSubmit(evt)}>{children}</form>
);
