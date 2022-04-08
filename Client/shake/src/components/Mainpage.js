import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './Dashboard.css';

function Mainpage() {

    var image1 = require('../assets/Asset 1.png')
    var image2 = require('../assets/Asset 2.png')
    var image3 = require('../assets/Asset 3.png')
    var image4 = require('../assets/Asset 4.png')


  return (
 
    <Container>
       <Row>
        <Col className="text-center center mt-3">
        <Image className="image img-fluid mt-5 center-block" width="250" height="250" src={image1} alt="jpg"/>
       
          <br/>
         <div className=" mt-3 head"> <h1><b>Welcome to Shake Community, <br/> Please click below to explore more....</b></h1> 
        </div>
        </Col>
       </Row>     
     <Row >

     <Col md={4} xs={4} lg={4} >

     <Image className="image img-fluid mt-5 center-block" width="250" height="250" src={image2} alt="jpg"/>
     </Col>
     <Col md={4} xs={4} lg={4} >
    
     <Image className="image img-fluid mt-5 center-block" width="250" height="250" src={image3} alt="jpg"/>
   
     </Col>
      <Col md={4} xs={4} lg={4}>
 
      <Image className="image img-fluid mt-5 center-block" width="250" height="250" src={image4} alt="jpg"/>
      </Col>

    </Row>
</Container>
  );
}

export default Mainpage;
