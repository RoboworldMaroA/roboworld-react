import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../css/StableDiffusionChapter.css';
import { motion } from 'framer-motion';

const StableDiffusionChapter = ({ text, delay }) => {

  const [displayedText, setDisplayedText] = useState("");

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


 const videoUrl = '/videos/txt2img_Pyramides_Lake_small.mp4'; // URL to the video file in the public folder
const videoUrl2 = '/videos/boat_on_lake_Eiffel_tower_med2.mp4'; // URL to the video file in the public folder

  return (

 <Container>
      <Row>
        <Col id="stableDiffusion">

    {/* <div id="stableDiffusion" className="chapter-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}> */}
      
      {/* --- INTRODUCTION --- */}
      <section className="intro-section">
          <h1>{displayedText}</h1>
        {/* <h1>Exploring Generative AI: Stable Diffusion on Apple Silicon</h1> */}
        <p>
          <strong>By Marek Augustyn</strong> | Date: 17.11.2025
        </p>
        <hr />
        
        <h2>1. What is Stable Diffusion?</h2>
        
        <p>
          Stable Diffusion is a groundbreaking deep learning model capable of generating detailed images from text descriptions. 
          Unlike traditional rendering, it uses a process called "diffusion." Imagine taking a clear image and slowly adding noise 
          (static) until it is unrecognizable. Stable Diffusion learns to reverse this process: it starts with pure noise and, guided 
          by your text prompt, iteratively refines it back into a clear, coherent image. It allows developers and artists to turn 
          imagination into visual reality locally on their own machines.
        </p>
      </section>

      {/* --- TEXT TO IMAGE SECTION --- */}
      <section className="text-to-image-section">
        <h2>2. Text-to-Image Generation (The Generator)</h2>
        <p>
          I have developed a custom script optimized for Apple Silicon (M1/M2/M3) hardware. The goal of this program is to take a 
          textual description—such as placing the Egyptian Pyramids in the Irish valley of Glendalough—and generate a photorealistic result.
        </p>

        <h3>Hardware Constraints and Model Selection</h3>
        
        <p>
          Running AI locally requires significant hardware resources. I am running this on a <strong>MacBook Pro M1 with 16GB of Unified Memory</strong>.
        </p>
        <p>
          During development, I attempted to use the newer <em>Stable Diffusion 3.5 Medium</em> model. However, this model requires massive VRAM 
          that exceeds the 16GB limit of the M1, causing memory allocation errors. To solve this, I specifically chose the 
          <strong>Stable Diffusion v1.5 model</strong>. It is highly optimized, stable, and produces excellent results without crashing the system 
          on 16GB devices.
        </p>

        <h3>The Python Code: Text-to-Image</h3>
        <p>
          Below is the complete code. It utilizes the <code>mps</code> (Metal Performance Shaders) backend to accelerate calculations using the Mac's GPU.
        </p>
 </section>
        {/* <div className="code-block" style={{ background: '#000;', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}> */}

  {/* <Card id= "codeText2Image"> */}
            {/* <Card.Header as='H5'>Generative AI Example</Card.Header> */}
            <Card.Body id= "codeText2Image">
  <div id="preTag">

          <pre>{`# Marek Augustyn
# Stable Diffusion v4 for Apple Silicon (M1/M2/M3)
# Date: 17.11.2025

import torch
from diffusers import StableDiffusionPipeline, DPMSolverMultistepSchedulerq
from pathlib import Path
import time
import os

# --- Configuration ---
# Using SD 1.5 for stability on 16GB M1 Systems
MODEL_ID = "runwayml/stable-diffusion-v1-5" 
DTYPE = torch.float32 # Full precision to prevent type errors
DEVICE = "mps" # Metal Performance Shaders for Mac

# The Prompt: Mixing Egypt with Ireland
PROMPT = "a professional cinematic photography of a Egyptian Pyramids placed in Glendalough Upper Lake located in Wicklow ,Ireland, view on the lake from the side that are visible lake in the valley, masterpiece, highly detailed "

NEGATIVE_PROMPT = "blurry, low quality, noise, grain, cartoon, illustration, painting, ugly, deformed, worst quality, extra limbs, bad anatomy, signature, watermark, no lake, no real Glendalought Ireland lake view"
OUTPUT_BASE_NAME = "sd15_stable_house_on_water"

STEPS = 50 
HEIGHT = 512 
WIDTH = 512

def get_unique_filename(base_name, extension=".png"):
    directory = Path.cwd()
    index = 1
    base_stem = base_name.split('.')[0]
    while True:
        filename = directory / f"{base_stem}_{index}{extension}"
        if not filename.is_file():
            return filename.name
        index += 1

def run_apple_silicon_stable_diffusion(model_id, prompt, negative_prompt, device, dtype):
    print(f"Loading Stable Diffusion V1.5 Pipeline on device: {device}")
    
    try:
        pipe = StableDiffusionPipeline.from_pretrained(
            model_id,
            torch_dtype=dtype, 
            use_safetensors=True,
            safety_checker=None, 
            low_cpu_mem_usage=True 
        )

        pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
        pipe.to(device)
        pipe.enable_attention_slicing(1)
        
        print(f"Generating image... Resolution: {WIDTH}x{HEIGHT}")
        
        start_time = time.time()
        image = pipe(
            prompt, 
            negative_prompt=negative_prompt, 
            num_inference_steps=STEPS, 
            guidance_scale=7.5, 
            height=HEIGHT, 
            width=WIDTH   
        ).images[0]
        end_time = time.time()
        
        unique_filename = get_unique_filename(OUTPUT_BASE_NAME)
        image.save(unique_filename)
        print(f"✅ Image generated: {unique_filename} in {end_time - start_time:.2f}s")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    run_apple_silicon_stable_diffusion(MODEL_ID, PROMPT, NEGATIVE_PROMPT, DEVICE, DTYPE)
`}</pre>
        </div>
     

      </Card.Body>
          {/* </Card> */}
          

      {/* --- INSTALLATION GUIDE --- */}
      <section className="installation-section">
        <h2>3. Step-by-Step Installation Guide</h2>
        <p>
          To run this code on your own MacBook Pro (M1/M2/M3) running macOS Sonoma 14.2.1, follow these instructions. 
          Please ensure you have at least 16GB of RAM for the smoothest experience.
        </p>
        
        <h3>Step 1: Prepare the Environment</h3>
        <p>Open your Terminal and navigate to your project folder. We will create a virtual environment to keep our libraries organized.</p>
        <div className="code-block" style={{ background: '#222', color: '#0f0', padding: '10px', borderRadius: '5px' }}>
          <code>python3 -m venv venv</code><br/>
          <code>source venv/bin/activate</code>
        </div>

        <h3>Step 2: Install PyTorch for Silicon</h3>
        <p>We need the version of PyTorch that supports Metal (MPS).</p>
        <div className="code-block" style={{ background: '#222', color: '#d0590a', padding: '10px', borderRadius: '5px' }}>
          <code>pip install torch torchvision torchaudio</code>
        </div>

        <h3>Step 3: Install Diffusers and Transformers</h3>
        <p>These libraries from Hugging Face allow us to interact with the Stable Diffusion models easily.</p>
        <div className="code-block" style={{ background: '#222', color: '#0f0', padding: '10px', borderRadius: '5px' }}>
          <code>pip install diffusers transformers accelerate</code>
        </div>
      </section>

      <hr />

      {/* --- IMAGE TO IMAGE SECTION --- */}
      <section className="img-to-img-section">
        <h2>4. Image-to-Image Generation (The Editor)</h2>
        
        <p>
          While creating images from text is impressive, sometimes we want to modify an existing photo. 
          This is called <strong>Image-to-Image (Img2Img)</strong> generation.
        </p>
        <p>
          In this program, I take a standard photograph of a lake and instruct the AI to modify it. 
          Specifically, I used the prompt to add a <strong>boat to the lake</strong>, reflecting in the calm surface with mist rising.
          The script uses a <code>STRENGTH</code> parameter (set to 0.53). This tells the AI to keep about 47% of the original image structure 
          while allowing 53% creativity to blend in the new boat naturally.
        </p>

        <h3>The Python Code: Image-to-Image</h3>

        <Card.Body id= "codeText2Image">
  <div id="preTag">
        {/* <div className="code-block" style={{ background: '#000;', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}> */}
          <pre>{`# Marek Augustyn
# Image-to-Image Transformation
# Adds a boat to a lake scene

import torch
from diffusers import StableDiffusionImg2ImgPipeline, DPMSolverMultistepScheduler
from PIL import Image
from pathlib import Path
import time
import os

MODEL_ID = "runwayml/stable-diffusion-v1-5"
DTYPE = torch.float32
DEVICE = "mps"

# Path to your local input image
INPUT_IMAGE_PATH = "/Users/marek/Programowanie/FineTuneGemma3_12B/my_lake_image.png"

# STRENGTH: 0.0 = original image, 1.0 = complete noise. 0.53 is a balanced blend.
STRENGTH = 0.53 

PROMPT = "a professional cinematic photograph of a serene lake at dawn, with **boat on it**, reflecting in the calm surface, mist rising, golden sunlight, highly detailed, stunning, epic atmosphere"
NEGATIVE_PROMPT = "blurry, low quality, noise, grain, cartoon, illustration, painting, deformed, worst quality, extra limbs, trees in the centre, bad anatomy, signature, watermark, modern buildings, trees, human figures"
OUTPUT_BASE_NAME = "sd15_img2img_boat_on_water"
STEPS = 70 
WIDTH = 768
HEIGHT = 512 

def run_apple_silicon_stable_diffusion(model_id, prompt, negative_prompt, device, dtype, input_image_path, strength):
    print(f"Loading Img2Img Pipeline...")
    
    try:
        pipe = StableDiffusionImg2ImgPipeline.from_pretrained(
            model_id, torch_dtype=dtype, use_safetensors=True, safety_checker=None
        )
        pipe.safety_checker = None # Optimization
        pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
        pipe.to(device)
        pipe.enable_attention_slicing(1)

        # Load and resize input image
        init_image = Image.open(input_image_path).convert("RGB")
        init_image = init_image.resize((WIDTH, HEIGHT))

        print(f"Generating with Strength: {strength}")
        
        image = pipe(
            prompt, 
            image=init_image, 
            negative_prompt=negative_prompt, 
            num_inference_steps=STEPS, 
            guidance_scale=7.7, 
            strength=strength 
        ).images[0]
        
        # Save logic (same as previous)...
        unique_filename = "img2img_result.png" 
        image.save(unique_filename)
        print(f"✅ Img2Img generated: {unique_filename}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    run_apple_silicon_stable_diffusion(MODEL_ID, PROMPT, NEGATIVE_PROMPT, DEVICE, DTYPE, INPUT_IMAGE_PATH, STRENGTH)
`}</pre>
</div>
</Card.Body>
        
      </section>


  {/* Video here */}
 <div className="video-container" style={{ position: 'relative', width: '100%', paddingBottom: '46.25%', height: 0, overflow: 'hidden' }}>
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


  {/* Video here */}
 <div className="video-container" style={{ position: 'relative', width: '100%', paddingBottom: '46.25%', height: 0, overflow: 'hidden' }}>
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
                  <source src={videoUrl2} type="video/mp4" />
                  {/* Fallback for browsers that do not support the video tag */}
                  Your browser does not support the video tag.
                </video></div>

 {/* </div> */}
  </Col>
      </Row>


    </Container>
   
  );
};

export default StableDiffusionChapter;