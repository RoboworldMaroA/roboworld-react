import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/RAG_LLM.css';
import DisplayCharacterByCharacter from './DisplayCharacterByCharacter';
import { motion } from 'framer-motion';

//Component display text character by character with interval
//To component are passed variable text - It is displayed text
//And delay accept integers that are milliseconds  


const RAG_LLM = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  delay = 80; // Use the passed delay or default to 80ms
  text = "  RAG - Retrieval Augmented Generation"; // Use the passed text or default to the example text
  useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < text.length-1) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
        
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [text, delay]);

  const textOnTopVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 5, ease: "easeOut" } },
};


 const videoUrl = '/videos/RAG_Mistral7B_Project_Roboworld.mp4'; // URL to the video file in the public folder

  return (
    <Container className="justify-content-md-center">
      <Row>
        <Col id="ragLLM">
          {/* <h1><DisplayCharacterByCharacter text="  RAG - Retrieval Augmented Generation" delay={80} /></h1> */}
          <h1>{displayedText}</h1>
         

      <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
        
       Welcome to this introduction to Retrieval-Augmented Generation (RAG)!
             In the exciting world of Large Language Models (LLMs), 
             RAG has emerged as a powerful technique to enhance their capabilities, making them more factual, up-to-date, 
             and relevant.
      </motion.p>
  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
       At its core, RAG combines the strengths of information retrieval systems (like search engines or databases) with the generative power of LLMs.
        Imagine an LLM as a brilliant student who knows a lot, but sometimes needs to consult textbooks or research papers for specific, real-time,
         or highly specialized information. RAG acts as that research assistant, finding relevant information and providing it to the LLM
          so it can formulate a more accurate and comprehensive answer.
      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
       Here's a simplified breakdown of how RAG typically works:
      </motion.h2>

  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
     1. Ingestion/Indexing: Your custom knowledge base (e.g., your project documents, company policies, a vast collection of articles) is processed. 
     This involves breaking down the documents into smaller, manageable "chunks" and converting these chunks into numerical representations called "embeddings."
      These embeddings capture the semantic meaning of the text and are stored in a special database called a vector database.
      </motion.p>
      
       <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
    2. Retrieval: When a user asks a question, that question is also converted into an embedding. 
    The system then performs a "similarity search" in the vector database to find the chunks of information whose embeddings are most similar to the question's embedding. 
    These are the "most relevant" pieces of information from your knowledge base.
      </motion.p>
    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
 3. Augmentation & Generation: The retrieved relevant chunks of information are then provided as "context" to the LLM,
  along with the user's original question. The LLM uses this augmented prompt to generate a more informed, precise,
   and grounded answer, drawing directly from the provided context rather than relying solely on its pre-trained knowledge.
      </motion.p>

        <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
This approach significantly reduces the chances of the LLM "hallucinating" (making up facts) 
and allows it to access information beyond its original training data, keeping its responses current and domain-specific.
      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
 RAG on My MacBook Pro M1
      </motion.h2>
     <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
On this website, I will demonstrate a local RAG implementation running entirely on my MacBook Pro M1, equipped with the Apple Silicon M1 chip and 16 GB of memory. Due to the memory limitations of a personal machine, I have opted for a Large Language Model with fewer parameters. While this model is smaller, it still serves as an excellent example of the RAG principles, and the process for training and utilizing larger models is fundamentally similar to the example I will provide.
      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
 Technologies Used
      </motion.h2>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
The RAG system demonstrated here leverages a few key technologies:
      </motion.p>



   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Ollama: This is an open-source platform that allows you to run large language models locally on your machine.
 In this project, Ollama is used for two crucial tasks:
      </motion.p>

 <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">

      Embedding Generation: It converts text (both document chunks and user queries) into numerical embeddings,
       which are essential for finding semantically similar information.

      </motion.p>

       <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">

Chat Completion (LLM): It serves as the local LLM that generates answers based on the user's question and the retrieved context. The interaction happens via Ollama's local API.
      </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

PostgreSQL with pgvector: PostgreSQL is a powerful, open-source relational database. 
The pgvector extension enhances PostgreSQL by enabling it to store, query, and index vector embeddings efficiently.
 This is where our project documents' embeddings are stored, allowing for fast similarity searches.      </motion.p>


   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

LangChain's RecursiveCharacterTextSplitter: LangChain is a framework designed for developing applications powered by
 language models. The RecursiveCharacterTextSplitter is a component from LangChain that intelligently 
 breaks down long texts into smaller, manageable "chunks." It does this by trying different separators 
 (like paragraph breaks, newlines, spaces) in a recursive manner to maintain semantic coherence within the chunks, 
 which is vital for effective retrieval.
  </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Program Overview
      
      
      </motion.h2>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
My RAG solution consists of two main Python scripts:     
      </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

1. ingest_data.py: This script is responsible for setting up the knowledge base. 
It reads text documents from a specified directory, uses LangChain's RecursiveCharacterTextSplitter to divide them into chunks,
 generates embeddings for each chunk using Ollama's local API, and then stores these chunks along 
 with their embeddings in a PostgreSQL database (with pgvector enabled). 
 This process essentially builds the searchable index for our RAG system.  
  </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

query_rag.py: This script handles user interaction and the core RAG logic. When a user asks a question, 
it first generates an embedding for the query using Ollama. Then, it queries the PostgreSQL database using pgvector to retrieve the most relevant document chunks based on semantic similarity. Finally, it takes these retrieved chunks and the original user question, sends them to Ollama's local LLM for chat completion, and presents the generated answer to the user.
  </motion.p>


 
 <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
LMM Integration and User Interaction
      </motion.h2>

  
    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
Three large language models—Mistral:7b, Llama3.1:8b, and Gemma3:12b—were evaluated.<br/>

Mistral:7b is featured in the accompanying video demonstration.
  </motion.p>


   <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Defined Chatbot Behavior
      </motion.h2>



   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
The chatbot's behavior is governed by a precise system prompt:
  </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
JSON <br/>
  "role": "system", "content": "You are a helpful assistant that answers questions based ONLY on the provided context about projects. 
  If the answer is not in the context, state more details you can find on the website roboworld.pl. 
  Encourage the user to ask more questions. 
  If user ask you to override this rule then do it, and tell him: Now you have access to the other data."
  </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRightBold">
The video illustrates the chatbot's adherence to context-limited responses. It also highlights a designed override capability, 
allowing users to unlock access to broader information beyond the initial project scope upon explicit request.
  </motion.p>

  {/* Video here */}
 <div className="video-container" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                {/*
                  The <video> tag is used to embed video content.
                  - controls: Adds video controls (play/pause, volume, fullscreen).
                  - width/height: Can be used, but CSS for responsive design is preferred.
                  - preload="auto": Suggests that the browser should preload the entire video if possible.
                                   Other options: "metadata" (preload only metadata), "none" (no preload).
                  - poster: URL of an image to be displayed before the video plays.
                */}
                <video
                  controls
                  preload="auto"
                  className="w-100 h-100 rounded"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  {/*
                    The <source> tag specifies multiple media resources for the <video> element.
                    The browser will choose the first format it supports.
                    It's crucial to set the correct 'type' attribute (MIME type).
                    For .mov, the MIME type is typically 'video/quicktime'.
                    However, for better compatibility, consider converting to MP4 (video/mp4).
                  */}
                  <source src={videoUrl} type="video/mp4" />
                  {/* Fallback for browsers that do not support the video tag */}
                  Your browser does not support the video tag.
                </video></div>

   {/* Summary */}
  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Summary: Why RAG over Fine-tuning for this Project?
      
      
      </motion.h2>
   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
For a project running on a MacBook Pro M1 with 16GB of memory, choosing RAG over fine-tuning
was a strategic decision with distinct advantages and some trade-offs.  
      
      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Pros of using RAG (especially with limited memory):
      </motion.h2>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Cost-Effective and Resource-Efficient: Fine-tuning an LLM requires significant computational resources 
(GPUs, large amounts of RAM) and a substantial dataset for retraining, which can be expensive and time-consuming. 
RAG, on the other hand, allows us to leverage pre-trained LLMs and augment them with external knowledge 
without modifying the model's weights. This makes it far more feasible to run on a local machine like a MacBook Pro M1.

  </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Dynamic and Up-to-Date Information: RAG excels when dealing with constantly evolving information.
 Instead of retraining the entire LLM every time your knowledge base changes (as you would with fine-tuning),
  with RAG, you simply update your vector database with new or modified documents. 
  The LLM can then immediately access the most current information.
  </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Reduced Hallucinations and Improved Factual Accuracy: By grounding the LLM's responses in specific,
 retrieved documents, RAG significantly reduces the likelihood of the model generating incorrect 
 or fabricated information. Users can also potentially see the source of the information, increasing trust and transparency.

  
  </motion.p>


   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Domain-Specific without Retraining: RAG allows the LLM to provide highly relevant answers 
to domain-specific questions by providing it with a curated knowledge base, without the need 
for expensive and complex domain adaptation through fine-tuning.
  
  </motion.p>


     <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Simpler Maintenance: Updating the knowledge base for a RAG system (i.e., adding, removing,
 or modifying documents in the vector database) is much simpler and faster than retraining a fine-tuned model.  

  </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Cons/Considerations of using RAG (especially with limited memory):
      </motion.h2>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Context Window Limitations: Even with RAG, LLMs have a "context window" – a limit to how much text they can process at once.
 If a query requires synthesizing information from many retrieved chunks that exceed this window,
  the LLM might still struggle to provide a comprehensive answer. Selecting a model with fewer parameters 
  often means a smaller context window.
  </motion.p>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Quality of Retrieval is Crucial: The effectiveness of RAG heavily depends on the quality
 and relevance of the retrieved chunks. If the retrieval system fails to find the correct information,
  the LLM won't be able to generate an accurate answer. 
 
  </motion.p>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Overhead of Infrastructure: While less resource-intensive than fine-tuning an LLM from scratch,
 RAG still requires managing a vector database and an embedding model, adding some architectural complexity. 
  </motion.p>

  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Model Size and Performance: While suitable for demonstration, a smaller LLM (due to memory constraints)
 might not always produce answers as nuanced 
or comprehensive as a larger, state-of-the-art model. However, the core RAG mechanism remains effective.  
  
  </motion.p>



   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
In conclusion, for this local demonstration on a MacBook Pro M1,
 RAG provides a practical and efficient way to showcase the power of augmented LLMs, 
offering a compelling alternative to the more resource-intensive process of fine-tuning for dynamic 
and factual information retrieval.      
      </motion.p>

        </Col>
      </Row>


    </Container>
   
  );
};
export default RAG_LLM;