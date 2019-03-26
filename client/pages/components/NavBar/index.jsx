import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.narrowLinks = React.createRef();
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
    const { items } = this.props;
    return (
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="warning" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {Array.isArray(items) && items.map((element, idx) => (<Nav.Link key={idx} href={element.url}>{element.text}</Nav.Link>))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
