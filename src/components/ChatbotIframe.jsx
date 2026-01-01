// Example React component for the iframe approach
import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const ChatbotIframe = () => {
  return (
  <Container>
    
<Row>
        <Col className="d-flex justify-content-center mt-4 mb-4">

    <div style={{width: '400px', height: '600px', border: '1px solid #070101', backgroundColor: '#060606' }}>
      <iframe 
        src="https://roboworld.duckdns.org:5000/" 
        title="Chatbot" 
        // width="100%" 
        width="100%" 
        height="100%" 
        style={{ border: 'none' }} 
      />
    </div>
    </Col>
    </Row>
  </Container>
  );
};

export default ChatbotIframe;