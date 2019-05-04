import React, { useState, useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import getConfig from 'next/config';
import Head from './Head';
import './styles.scss';

const { API_KEY } = getConfig();

console.log('GET CONFIG', getConfig());

export default () => {
  const [sceneNode, setSceneNode] = useState(null);

  function handleScrollDown(evt) {
    const scrollDown = evt.deltaY > 0 && true;

    if (scrollDown) {
      sceneNode.classList.add('is-over');
    } else {
      sceneNode.classList.remove('is-over');
    }
  }
  useEffect(() => {
    console.log('useEffect', sceneNode);

    if (document !== 'undefined') {
      document.addEventListener('wheel', handleScrollDown);
    }

    return () => document.removeEventListener('wheel', handleScrollDown);
  }, [sceneNode]);

  const getNode = node => setSceneNode(node);
  return (
    <React.Fragment>
      <Head />
      <div className="wrap">
        <div className="deck scene" ref={getNode}>
          <div className="text centered" title="Natalia Scheuer Abogada" />
        </div>
        <div className="surprise">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 left">
              <h2>Left</h2>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 right">
              <h2>Rigth</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// DIVORCIOS
// DIVORCIO MUTUO ACUERDO
// DIVORCIOS UNILATERALES

// SEPARACION JUDIFICIAL
// LUQUIDACION DE SOCIEDAD CONYUGAL

// REGULACION DE ALIMENTOS
// RELACION DIRECTA Y REGULAR
// CUIDADO PERSONAL

// TRANSACCIONES
