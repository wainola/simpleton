import React from 'react';
import Contact from './contact';
import checkMobile from '../../Services/checkIfMobile';

const ContactEntryPoint = props => {
  const { ifMobile } = props;
  return <Contact ifMobile={ifMobile} />;
};

ContactEntryPoint.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const ifMobile = checkMobile(userAgent);
  return { ifMobile };
};

export default ContactEntryPoint;
