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
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    console.log('didMount', window);
    window.addEventListener('resize', this.handleResize);
  }

  handleResize(evt) {
    console.log('handleResize', evt);
  }

  handleToggle() {
    console.log('this.ref', this.narrowLinks);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-wide">
          <div className="wide-div">
            {this.state.content.map(elem => (
              <a href="" onClick={evt => this.handleClick(evt)} className="menu-item">
                {elem.text}
              </a>
            ))}
          </div>
        </div>
        <div className="nav-narrow">
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
