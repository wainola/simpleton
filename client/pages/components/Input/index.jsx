import React from 'react';

export default ({ title, placeholder, type, handleChange, className, descriptor }) => {
  console.log('input');

  return (
    <React.Fragment>
      <h5>{title}</h5>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={className}
        data-descriptor={descriptor.toLowerCase()}
      />
    </React.Fragment>
  );
};
