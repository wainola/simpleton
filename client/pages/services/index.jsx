import React from 'react';
import Services from './services';
import checkMobile from '../../Services/checkIfMobile';

const ServicesEntryPoint = props => {
  const { ifMobile } = props;
  return <Services ifMobile={ifMobile} />;
};

ServicesEntryPoint.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const ifMobile = checkMobile(userAgent);
  return { ifMobile };
};

export default ServicesEntryPoint;
