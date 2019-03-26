const nameValidator = name => {
  console.log('nameValidator');
  return typeof name === 'string' && name.length > 3;
};

const lastNameValidator = lastname => {
  console.log('lastNameValidator');
  return typeof lastname === 'string' && lastname.length > 3;
};

const emailValidator = email => {
  console.log('emailValidator');
  const validator = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return validator.test(email);
};

const addressValidator = address => {
  console.log('addressValidator');
  return typeof address === 'string' && address.length > 10;
};

const queryReasonValidator = reason => {
  console.log('queryReasonValidator');
  return typeof reason === 'string' && reason.length > 20;
};

const phoneValidator = phone => {
  console.log('phoneValidator');
  return typeof phone === 'string';
};

export {
  nameValidator,
  lastNameValidator,
  emailValidator,
  addressValidator,
  queryReasonValidator,
  phoneValidator
};
