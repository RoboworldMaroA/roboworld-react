
import DisplayCharacterByCharacter from './DisplayCharacterByCharacter';
import '../css/GenAI.css';
// import { Col, Container, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GenerativeAIExample from './GenerativeAIExample';
import TestGenerativeAIExample from './TestGenerativeAIExample';
import Card from 'react-bootstrap/Card';

const  Home= () => {



    return (  
    <Container>
        <Row>
          <Col id="genAI" >
      <h1><DisplayCharacterByCharacter text="  Generative AI" delay={100} /></h1>

   

      <div className="paragraphAlignedToLeft">
        
     
        <p>Generative AI is a branch of artificial intelligence that focuses on creating content, such as text, images, music, and more,
           based on patterns and data it has learned. Unlike traditional AI, which primarily analyzes and processes existing data,
            generative AI has the ability to produce new and original content. This makes it incredibly versatile and powerful for a wide range of applications.</p>

<p>You can find generative AI being used in various fields including content creation, art, entertainment,
   and even in developing new products and services. For example, it can be used to write articles,
    create realistic images and videos, compose music, and generate code.
     Its capability to mimic human-like creativity opens up endless possibilities for innovation and productivity.</p>

<p>One of the key advantages of generative AI is its ability to be fine-tuned for specific tasks.
   By training a model like the Gemini AI with particular data sets and parameters, you can customize it to meet your unique requirements.
    This fine-tuning process enhances the model's performance and accuracy, making it a valuable tool for businesses and individuals alike.</p>

<p>In this blog, we'll explore how to fine-tune the Gemini AI model and demonstrate the impressive results it can achieve.
   Stay tuned to discover the potential of generative AI and how it can revolutionize your creative and professional endeavors.</p>
</div>

<div id="displayFineTuneGeminiAI"><DisplayCharacterByCharacter text="  Fine Tune Gemini AI" delay={300} /></div>

<p className="paragraphAlignedToLeft">In this project, we will demonstrate how to fine-tune a generative AI model to predict the next number in a sequence.
   By training the model with various numerical inputs and their corresponding outputs, we aim to create an AI that can generate the next number in a given sequence, regardless of the number format (e.g., integers, spelled-out numbers, negative numbers). The model will be trained to understand and predict numbers in multiple languages, including English, Polish, French, and Japanese.
   The training process will be carried out using Visual Studio Code, the Google Generative AI API, and Python.</p>

  <div className="paragraphAlignedToLeft" id="codeSnippet"><GenerativeAIExample/></div> 

<p>The provided Python code showcases the steps involved in configuring and fine-tuning the generative AI model</p>
<div className="paragraphAlignedToLeft">
<p>Retrieve the Google API key from environment variables.</p>

<p>Configure the Google Generative AI with the retrieved API key.</p>

<p>List the existing tuned models.</p>

<p>Create and fine-tune a generative AI model to predict the next number in a sequence.</p>

<p>Monitor the tuning progress and view the loss curve.</p>

<p>Evaluate the tuned model with various inputs in different languages and formats.</p>

<p>Update the description of the tuned model.</p>

<p>This project illustrates the power and versatility of generative AI in understanding and predicting numerical sequences in various languages and formats.</p>
</div>

<div id="displayFineTuneGeminiAI"><DisplayCharacterByCharacter text="   Test a fine tunned model" delay={300} /></div>
<p className="paragraphAlignedToLeft"  >This Python script is used to test the fine-tuned models on the Google AI Platform.
   It retrieves the API key from the environment variables, configures the generative AI with the key, and lists existing tuned models.
    The script loads one of two models: one that predicts the next element in a sequence, and another that predicts the previous element. 
  It then generates content based on various inputs, including numbers and numerals in different languages, and prints the results.</p>
  <div className="paragraphAlignedToLeft" id="codeSnippet"><TestGenerativeAIExample/></div> 

  <div id="displayFineTuneGeminiAI"><DisplayCharacterByCharacter text="   Output" delay={300} /></div>
  <div><p>
  The output from the generate-num-313 model indicates that it is successfully predicting the next element in a sequence. Each input provided, whether a number or a numeral in different languages, resulted in the correct subsequent number:
</p>

<Card.Body id="output">
              <ul>
              <li>61 {'->'} 62</li>
                <li>1000 {'->'} 1001</li>
                <li>12347876 {'->'} 123478767</li>
                <li>nine {'->'} ten</li>
                <li>pięć (Polish 5) {'->'} sześć (Polish 6)</li>
                <li>dos (Spanish 2) {'->'} tres (Spanish 3)</li>
                <li>due (Italian 2) {'->'} tre (Italian 3)</li>
                <li>tre (Italian 3) {'->'} quatro (Italian 4)</li>
                <li>七 (Japanese 7) {'->'} 八 (Japanese 8)</li>
                <li>セブン (Japanese seven) {'->'} エイト (Japanese eight)</li>
              </ul>
            </Card.Body>

<p>The model performed well in understanding and predicting the next element, showcasing its ability to handle various languages and formats effectively.

    
  </p> </div>

        </Col>
        </Row>
        
    </Container>)
}
 
export default Home ;