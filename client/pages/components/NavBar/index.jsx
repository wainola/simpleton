import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
      <Container fluid>
        <Navbar bg="warning">
          <Navbar.Toggle artia-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-mavbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Nosotros</Nav.Link>
              <Nav.Link href="#">Consulte</Nav.Link>
              <Nav.Link href="#">Asesorias</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
