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
  // const booleanValidation = Object.values(validData)[0];
  console.log('validData', validData);
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
      {/* {!booleanValidation && <CustomAlert validation={booleanValidation} />} */}
    </React.Fragment>
  );
};

export default Input;
