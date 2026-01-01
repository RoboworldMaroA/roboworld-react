import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/GenerativeAIExample.css';

const GenerativeAIExample = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card id= "generativeAIExampleHeader">
            <Card.Header as='H5'>Generative AI Example</Card.Header>
            <Card.Body>
            <div id="preTag">
                <pre>{`
import os
import random
import time
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import google.generativeai as genai

# Retrieve the API key from environment variables
api_key = os.getenv("GOOGLE_API_KEY")
print(api_key)

# Raise an error if the API key is not found
if not api_key:
    raise ValueError("API key not found.
     Please set the GOOGLE_API_KEY environment variable.")

# Configure the generative AI with the retrieved API key
genai.configure(api_key=os.environ['GOOGLE_API_KEY'])

# List existing tuned models
for i, m in zip(range(5), genai.list_tuned_models()):
    print(m.name)

# Create a tuned model to generate the next number in a sequence
base_model = [
    m for m in genai.list_models()
    if "createTunedModel" in m.supported_generation_methods and
    "flash" in m.name][0]

name = f'generate-num-{random.randint(0, 10000)}'
operation = genai.create_tuned_model(
    source_model=base_model.name,
    training_data=[
        {'text_input': '1', 'output': '2'},
        {'text_input': '3', 'output': '4'},
        {'text_input': '-3', 'output': '-2'},
        {'text_input': 'twenty two', 'output': 'twenty three'},
        {'text_input': 'two hundred', 'output': 'two hundred one'},
        {'text_input': 'ninety nine', 'output': 'one hundred'},
        {'text_input': '8', 'output': '9'},
        {'text_input': '-98', 'output': '-97'},
        {'text_input': '1,000', 'output': '1,001'},
        {'text_input': '10,100,000', 'output': '10,100,001'},
        {'text_input': 'thirteen', 'output': 'fourteen'},
        {'text_input': 'eighty', 'output': 'eighty one'},
        {'text_input': 'one', 'output': 'two'},
        {'text_input': 'three', 'output': 'four'},
        {'text_input': 'seven', 'output': 'eight'},
    ],
    id=name,
    epoch_count=80,
    batch_size=4,
    learning_rate=0.001,
)

# Check the status of the tuned model
model = genai.get_tuned_model(f'tunedModels/{name}')
print(model.state)

# Monitor the tuning progress
for status in operation.wait_bar():
    time.sleep(30)

# View the loss curve from the tuning results
model = operation.result()
snapshots = pd.DataFrame(model.tuning_task.snapshots)
sns.lineplot(data=snapshots, x='epoch', y='mean_loss')
plt.savefig('loss_curve.png')
plt.show()

# Evaluate the tuned model with various inputs
model = genai.GenerativeModel(
model_name=f'tunedModels/{name}')

result = model.generate_content('55')
print(result.text)

result = model.generate_content('123455')
print(result.text)

result = model.generate_content('four')
print(result.text)

result = model.generate_content('quatre')  # French for 4
print(result.text)                  # French for 5 is "cinq"

result = model.generate_content('III')# Roman numeral for 3
print(result.text)              # Roman numeral for 4 is IV

result = model.generate_content('七') # Japanese for 7
print(result.text)                   # Japanese for 8 is 八

# Update the description of the tuned model
genai.update_tuned_model(f'tunedModels/{name}',
 {"description": "This is my model."})
model = genai.get_tuned_model(f'tunedModels/{name}')
print(model.description)
                `}</pre>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GenerativeAIExample;
