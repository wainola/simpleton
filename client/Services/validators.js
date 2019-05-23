const emailValidation = email => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return { key: 'email', isValid: emailRegex.test(email) };
};

const validateOtherData = data =>
  data.map(item => {
    if (item[0] === 'nombre' || item[0] === 'apellido') {
      return { key: item[0], isValid: item[1].length > 3 };
    }

    if (item[0] === 'telefono') {
      return { key: item[0], isValid: item[1].length >= 9 };
    }
    return { key: item[0], isValid: item[1].length > 10 };
  });

const validations = fields => {
  const data = Object.entries(fields).filter(e => e[0] !== 'email');

  const { email } = fields;

  const validEmail = emailValidation(email);

  const validData = validateOtherData(data);

  return [...validData, validEmail];
};

export default validations;
