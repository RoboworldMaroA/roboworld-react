import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/GenerativeAIExample.css';

const TestGenerativeAIExample = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card id= "generativeAIExampleHeader">
            <Card.Header as='H5'>Test Generative AI Example</Card.Header>
            <Card.Body>
              <div id="preTag">
                <pre>
                  <code>
                  {`
import google.generativeai as genai
import os


api_key = os.getenv("GOOGLE_API_KEY")
# print(api_key)# get the API key from the environment variable

if not api_key:
    raise ValueError("API key not found. 
    Please set the GOOGLE_API_KEY environment variable.")
# Get the key from the GOOGLE_API_KEY env variable
genai.configure(api_key=os.environ['GOOGLE_API_KEY']) 


for i, m in zip(range(15), genai.list_tuned_models()):
  print(m.name)


# load model from the account that will be used for prediction
# result for prediction next smaller number
model = genai.GenerativeModel(
model_name=f'tunedModels/generate-num-8379') 
print(f"Using model: {model}")

#test the model and print the results

result = model.generate_content('61')
print(result.text)

result = model.generate_content('1000')
print(result.text)

result = model.generate_content('12347876')
print(result.text)

result = model.generate_content('nine')
print(result.text)

# Polish 5
# Polish 6 is "sześć" , Polish 4 is "cztery"
result = model.generate_content('pięć')   
print(result.text)        

# Spanish numeral 1 is "uno", Spanish numeral 3 is "tres"
# Spanish numeral 2
result = model.generate_content('dos')    
print(result.text)                        

# Italy numeral 2
# Italy numeral 1 is "uno", Italy numeral 3 is "tre"
result = model.generate_content('due')    
print(result.text)                      

# Italy numeral 3
# Italy numeral 2 is "due", Italy numeral 4 is "quattro"
result = model.generate_content('tre')    
print(result.text)                        

# Japanese 7
# Japanese 6 is "六"
result = model.generate_content('七')      
print(result.text)                         

 # Japanese seven
# Japanese 6 is "六", Japanese 8 is 八
result = model.generate_content('セブン') 
print(result.text)                         
`}</code></pre>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestGenerativeAIExample;
