import React, { Component } from 'react';
import './styles.scss';

export default class NavBar extends Component {
  constructor() {
    super();
    this.narrowLinks = React.createRef();
    this.state = {
      content: [
        { text: 'Inicio' },
        { text: 'Quiénes somos' },
        { text: 'Consulte' },
        { text: 'Contacto' }
      ]
    };
  }

  handleToggle() {
    console.log('this.ref', this.narrowLinks);
  }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            {this.state.content.map(elem => (
              <a href="" onClick={evt => this.handleClick(evt)}>
                {elem.text}
              </a>
            ))}
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
