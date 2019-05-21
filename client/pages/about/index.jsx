import React from 'react';
import About from './about';
import checkMobile from '../../Services/checkIfMobile';

const AboutEntryPoint = props => {
  const { ifMobile } = props;
  return <About ifMobile={ifMobile} />;
};

AboutEntryPoint.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const ifMobile = checkMobile(userAgent);
  return { ifMobile };
};

export default AboutEntryPoint;
