import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Description = () => (
  <React.Fragment>
    <Col className="col-md-4">
      <Card className="card border-success mb-3">
        <Card.Img variant="top" src="/static/img/abogado2.jpg" />
        <Card.Body>
          <Card.Title>Divorcios y tramitaciones de familia</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat sit nisi
            repudiandae consequuntur enim est voluptatibus magnam magni natus, animi, ut maxime,
            ipsa deleniti iste veritatis sapiente! Praesentium, quidem
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="col-md-4">
      <Card.Img variant="top" src="/static/img/abogado1.jpg" />
      <Card className="card border-success mb-3">
        <Card.Body>
          <Card.Title>Causas Medio Ambientales</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, voluptas nam!
            Non illum autem optio, aliquid consequatur debitis. Nam minus, mollitia blanditiis
            temporibus deleniti at quia voluptate ut perspiciatis provident.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col className="col-md-4">
      <Card className="card border-success mb-3">
        <Card.Img variant="top" src="/static/img/abogado3.jpg" />
        <Card.Body>
          <Card.Title>Contacto rápido y confidencial.</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, repellendus consequuntur
            id error corrupti doloremque laboriosam maiores beatae rem, repellat veritatis accusamus
            dolorem. Velit voluptatum, iusto porro dolor illo quis.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </React.Fragment>
);

export default Description;
