import React, { Component } from 'react';
import './styles.scss';

export default class NavBar extends Component {
  constructor() {
    super();
    this.narrowLinks = React.createRef();
  }

  handleToggle() {
    console.log('this.ref', this.narrowLinks);
  }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="">Inicio</a>
            <a href="">Quiénes somos</a>
            <a href="">Consulte</a>
            <a href="">Contacto</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" />
          <div ref={this.narrowLinks} className="narrowLinks">
            <a href="">Inicio</a>
            <a href="">Quiénes somos</a>
            <a href="">Consulte</a>
            <a href="">Contacto</a>
          </div>
        </div>
      </nav>
    );
  }
}
