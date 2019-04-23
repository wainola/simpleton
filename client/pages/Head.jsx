import Head from 'next/head';
import React from 'react';

export default () => (
  <React.Fragment>
    <Head>
      <title>Simpleton Site!</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>
  </React.Fragment>
);
