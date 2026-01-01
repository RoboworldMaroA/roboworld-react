import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../css/ComputerVision.css';
import '../css/FineTuneGemma.css';
import { motion } from 'framer-motion';
import { left } from '@popperjs/core';

//Component display text character by character with interval
//To component are passed variable text - It is displayed text
//And delay accept integers that are milliseconds  


const FineTuneGemma = ({ text, delay }) => {
const [displayedText, setDisplayedText] = useState("");
  delay = 80; // Use the passed delay or default to 80ms
  text = "  Fine Tune - Gemma on local server. "; // Use the passed text or default to the example text
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


//  const videoUrl = '/videos/RAG_Mistral7B_Project_Roboworld.mp4'; // U
 const videoFineTunedModelUrl = '/videos/chat_roboworld_fine_tuned_shorter.mp4'; // U
const videoFineNOTunedModelUrl = '/videos/chat_roboworld_NO_fine_tuned_shorter.mp4'; // U
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
        
      Fine-tuning is the process of taking a pre-trained large language model (LLM) and 
      training it further on a custom dataset to specialize its responses for a specific domain or use case.
       Unlike Retrieval-Augmented Generation (RAG), which augments a model’s answers with information retrieved from external sources at inference time,
        fine-tuning actually changes the model’s internal weights based on your data.
      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
       Advantages of Fine-Tuning:
      </motion.h2>

  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
<ol>
    <ls> - The model can generate highly relevant and context-aware responses for your specific needs.</ls><br/>
    <ls>- No need for a retrieval system at inference time—everything is “baked in.”</ls><br/>
        - Works offline, as all knowledge is internalized.
</ol>
      </motion.p>
      
  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
 Disadvantages Compared to RAG:
      </motion.h2>
     <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
<ol>
  <ls>- Fine-tuned models can “hallucinate” or make up facts, especially if the training data is limited.</ls><br/>
<ls>- Updating knowledge requires re-training, whereas RAG can update instantly by changing the retrieval database.</ls><br/>
<ls>- Fine-tuning is often more resource-intensive, requiring powerful GPUs and large datasets.</ls><br/>
</ol>


      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Here’s a Simplified Breakdown of How Fine-Tuning Typically Works
      </motion.h2>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
                        <ol>
                          1. Select a Pre-trained Model: Start with a large language model, such as Google’s Gemma 2B.<br/>

2. Prepare Your Data: Collect and format your custom data (e.g., in JSONL format).<br/>
3. Configure Training: Set parameters like learning rate, batch size, and number of epochs.<br/>
4. Apply Parameter-Efficient Fine-Tuning (PEFT): Use techniques like LoRA (Low-Rank Adaptation) to efficiently adapt the model without updating all its parameters.<br/>
5. Train the Model: Run the training process on your data.
6. Save and Use the Model: The fine-tuned model can now generate responses tailored to your domain.<br/>
                        </ol>

      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Running Fine-Tuning Locally on a MacBook Pro M1
      </motion.h2>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

This project demonstrates that you can fine-tune a large language model locally on a MacBook Pro M1 with 16GB of memory.
 The following technologies were used:
      </motion.p>


 <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">

 - PyTorch with Apple Silicon (MPS) support for efficient computation.<br/>
 - Transformers library from Hugging Face for model and tokenizer management.<br/>
 - PEFT (LoRA) for parameter-efficient fine-tuning.<br/>
 - Datasets for loading and processing custom data.<br/>

      </motion.p>




  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
How the Program Works
      
      
      </motion.h2>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
The provided script (fine_tune_gemma2Bv3.py) automates the fine-tuning process:   
      </motion.p>

   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">

Model & Tokenizer Loading: Loads the pre-trained Gemma 2B model and its tokenizer.
LoRA Configuration: Sets up LoRA adapters to efficiently fine-tune only a subset of the model’s parameters.
Dataset Preparation: Loads your custom dataset (e.g., training_data_my_projects_v3.jsonl) and tokenizes it.
Training: Uses Hugging Face’s Trainer API to run the fine-tuning process, leveraging MPS acceleration on the MacBook.
Saving: After training, saves the fine-tuned model and tokenizer for future use.
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
Demonstration: A Tale of Two Models
      </motion.h2>

  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
The video below showcases a chat with two different versions of the Gemma model. The first is a baseline model, running without any fine-tuning. The second is a fine-tuned model, trained specifically on my projects related to software development, robotics, and automation.
  </motion.p>

  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
To highlight the success of fine-tuning, I have prepared two distinct models, both based on my personal projects.
  </motion.p>
  
 <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Model 1: The Generalist (3-Example Fine-Tune)
      </motion.h2>
  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
This model was trained with only three examples of data about my projects, specifically mentioning my name, Marek Augustyn. As you will see, when asked about me, the model provides an answer that is technically correct but lacks the specific context of my work. It's a general-purpose response that doesn't showcase the depth of my portfolio.
  </motion.p>

 <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">
 - Query: "Tell me about Marek Augustyn." <br/>
 - Expected Response (from the model): The model should provide basic information about Marek Augustyn but fail to connect him to roboworld.pl or other specific technical projects, as this information was not provided in its limited training set.


      </motion.p>

 <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Model 2: The Specialist (Domain-Specific Fine-Tune)
      </motion.h2>
  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
This second model was fine-tuned on a much larger dataset, including detailed information about my projects in software development, robotics, and automation. When asked the same question, this model provides a comprehensive, domain-specific answer, demonstrating a deep understanding of my professional work. This is the core advantage of fine-tuning—it transforms a general model into an expert in your specific domain.
  </motion.p>

 <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">
 - Query: "Tell me about Marek Augustyn."<br/>

 - Expected Response (from the fine-tuned model): The model should accurately describe my work, mentioning projects related to robotics, automation, and software development, and likely referencing the content from my website.

      </motion.p>


 <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Another Example to Demonstrate Success
      </motion.h2>
  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
To further prove the model's specialized knowledge, you can provide an example that requires reasoning only possible with your fine-tuned data.
  </motion.p>

 <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">
 - Query: "What robotics project has Marek Augustyn been working on? Give me a list of projects."<br/>

 - Expected Response (from the fine-tuned model): The model should reference a specific project from your training data and explain why it was complex (e.g., due to its integration of multiple systems, novel algorithms, or specific hardware challenges).<br/>

 - Expected Response (from the baseline model): The baseline model will likely give a generic answer or state that it doesn't have enough information, proving it lacks the specific knowledge you've "injected" into the fine-tuned version.<br/>
      </motion.p>



 <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
The Downside: Exposing Hallucinations
      </motion.h2>
  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedToRight">
Fine-tuning is not without its risks. The most common pitfall is hallucination, where the model confidently generates false information. I have experienced this myself. In one chat, the model claimed I was running a website that was not mine and was unrelated to my experience.<br/>  
  To demonstrate this on your site, you can include a prompt designed to trigger a hallucination.
  </motion.p>

 <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphTabbedMoreToTheRight">
 - Query: "When was the roboworld.pl website founded?"<br/> 

 - Expected Response (from the fine-tuned model): The model might hallucinate a specific date that is factually incorrect, or it might confidently provide a fictional narrative about the site's history. This happens when the model lacks a specific fact in its training data but tries to "fill in the blanks" based on its pre-trained general knowledge.
      </motion.p>





  {/* Video fine tuned model here */}
  <div className="video-container" >
 {/* <div className="video-container" style={{ position: 'relative', width: '58%', marginLeft: '20%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}> */}
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
                  preload="metadata"
                  playsInline
                  // className="w-70 h-100 rounded"
                  // style={{ position: 'absolute', top: 0, left: 60 , paddingBottom: '20px', paddingTop: '20px' }}
                >
              
                  <source src={videoFineTunedModelUrl} type="video/mp4" />
                  {/* Fallback for browsers that do not support the video tag */}
                  Your browser does not support the video tag.
                </video></div>
  {/* Video NO fine tuned model here  */}
  {/* <div className="video-container" style={{ position: 'relative', width: '58%', marginLeft: '20%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}></div> */}
 <div className="video-container" >
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
                  preload="metadata"
                  playsInline
                  // className="w-70 h-100 rounded"
                  // style={{ position: 'absolute', top: 0, left: 60 , paddingBottom: '20px', paddingTop: '20px' }}
                >
                  {/*
                    The <source> tag specifies multiple media resources for the <video> element.
                    The browser will choose the first format it supports.
                    It's crucial to set the correct 'type' attribute (MIME type).
                    For .mov, the MIME type is typically 'video/quicktime'.
                    However, for better compatibility, consider converting to MP4 (video/mp4).
                  */}
                  <source src={videoFineNOTunedModelUrl} type="video/mp4" />
                  {/* Fallback for browsers that do not support the video tag */}
                  Your browser does not support the video tag.
                </video></div>
   {/* Summary */}
  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Summary:
      
      
      </motion.h2>
   <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Before fine-tuning, the Gemma 2B model had no knowledge of Marek Augustyn or his projects. 
After running this process, the model can generate much more relevant and informed responses about Marek and his work. 
However, some hallucinations (incorrect or made-up facts) may still occur. 
The next stage of this project will integrate Retrieval-Augmented Generation (RAG) to
 further reduce hallucinations and improve factual accuracy.
      
      </motion.p>

  <motion.h2  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
Fine-tuning on your own machine is now accessible, even with consumer hardware, thanks to modern libraries and Apple Silicon support.
 This opens up new possibilities for personalizing AI models to your unique needs.
      </motion.h2>

        </Col>
      </Row>

    </Container>
   
  );
};
export default FineTuneGemma;