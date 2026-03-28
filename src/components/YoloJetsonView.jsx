// Example React component for the iframe approach
import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const YoloJetsonView = () => {
  return (
 <Container>
    
<Row>
  {/* <Col className="d-flex justify-content-center mt-8 mb-8"> */}
{/* <Col className="d-flex justify-content-center mt-4 mb-4"> */}
    {/* <div style={{width: '640px', height: '630px', border: '1px solid #070101', backgroundColor: '#060606' }}> */}
    {/* <div style={{width: '1080px', height: '1080px', border: '1px solid #070101', backgroundColor: '#060606' }}> */}
      <Col className="d-flex justify-content-centers" style={{ height: '640px', border: '1px solid #070101', backgroundColor: '#060606' }}>
      <iframe 
        src="http://192.168.0.12:5004/" 
        title="Yolo Jetson View" 
        width="640px"  
        style={{ border: 'none' }} 
      />
    {/* </div> */}
    </Col>
    </Row>
  </Container>
  );
};

export default YoloJetsonView;