import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './style.css'

const MyJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
            <Row>
                <h1 className="display-3">Jacob Moss</h1>
            </Row>
            <Row id='picrow'>
                <Col xs={6} md={4}>
                    {props.children}
                </Col>   
                <Col xs={12} lg={6}>
                    <h3>I'm a full-Stack Web Developer with extensive project experience in the tech industry. I received my certificate from the University of Texas at Austin and am proficient in technologies such as Node.js, React, and responsive HTML/CSS.</h3>
                    <br/>
                    <h3>I'm currently working with software engineering teams and UX teams within the product organization at Indeed. I use the following tools/techniques during my day-to-day work: 
                    
                        <ul>
                        <br/>
                            <li>JIRA/Confluence</li>
                            <li>Python Jupyter Notebooks</li>
                            <li>SQL</li>
                            <li>Sprint planning & Triage</li>
                        </ul>    
                    </h3>
                </Col>
            </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MyJumbotron;