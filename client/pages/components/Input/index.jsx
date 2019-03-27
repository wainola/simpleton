import React from 'react';

export const Input = ({
  title,
  placeholder,
  type,
  handleChange,
  className,
  descriptor,
  CustomAlert,
  validData
}) => {
  console.log('validData', validData);

  let value;

  if (value !== undefined) {
    value = validData.value;
  }

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
      {value !== undefined && value !== true && <CustomAlert validation={{ value, descriptor }} />}
    </React.Fragment>
  );
};

export default Input;
