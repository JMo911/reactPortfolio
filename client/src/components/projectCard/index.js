import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';
import './style.css'

const ProjectCard = (props) => {
  return (
    <div>
      <Col sm="6" className="offset-sm-3">
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardText>Some quick ProjectCard text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default ProjectCard;