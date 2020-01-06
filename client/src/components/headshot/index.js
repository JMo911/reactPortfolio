import React, { useState } from 'react';
import './style.css'
import { Container, Row, Col, Image } from 'react-bootstrap';

const Headshot = (props) => {


  return (
    <Container>
        {console.log('publicurl',process.env.PUBLIC_URL)}
        {/* <Row> */}
            {/* <Col xs={6} md={4}> */}
            <Image src={props.picsrc} alt="Default Pic" roundedCircle thumbnail/>
            {/* </Col> */}
        {/* </Row> */}
    </Container>
  );
}

export default Headshot;


