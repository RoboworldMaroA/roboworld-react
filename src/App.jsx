import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import HomeProjects from './components/HomeProjects';
import MotionExample from './components/MotionExample';
import DelayedParagraph from './components/DelayedParagraph'
import DisplayCharacterByCharacter from './components/DisplayCharacterByCharacter';
import ComputerVision from './components/ComputerVision';
import StableDiffusion from './components/StableDiffusion';
import StableDiffusionChapter from './components/StableDiffusionChapter';
import GenAI from './components/GenAI';
import RAG_LLM from './components/RAG_LLM';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/rajdhani";
import Footer from './components/Footer';
import FineTuneGemma from './components/FineTuneGemma';
import ChatbotIframe from './components/ChatbotIframe';

function App() {
  // const [count, setCount] = useState(0)
  // const [delay, setDelay] = useState(100);

  return (
    <div className="App">
    <NavBar/>
<BrowserRouter>
      {/* <ToastContainer/> */}
       
        {/* <DisplayCharacterByCharacter text="This sentence is displayed character by character." delay={100} /> */}
          <Routes>
          
          <Route path = "/" exact element={ <>
            <Home/> ,
            {/* <MotionExample/> */}
            <HomeProjects/>
            
            </> }/>

          {/* <Route path = "/Welcome" exact element={<DelayedParagraph delay={1000} delay2={2000}/>}/> */}
          <Route path = "/GenAI" exact element={<>
            
            {/* <DelayedParagraph delay={1000} delay2={2000}/>, */}
            <GenAI/>
        
            </>}/>

          <Route path = "/RAG_LLM" exact element={<>
            
            {/* <DelayedParagraph delay={1000} delay2={2000}/>, */}
            <RAG_LLM/>
        
            </>}/>

          <Route path = "/WelcomeNew" exact element={<DisplayCharacterByCharacter text=" % Hello World Again 2" delay={200}  />}/>
          <Route path = "/ComputerVision" exact element={<>
            <ComputerVision text=" % Automatic Number Plate Recognition" delay={300}/>
            </>}/>

               <Route path = "/StableDiffusion" exact element={<>
            <StableDiffusion text=" % Stable Diffusion" delay={200}/>
            </>}/>

                 <Route path = "/StableDiffusionChapter" exact element={<>
            <StableDiffusionChapter text=" % Exploring Generative AI: Stable Diffusion on Apple Silicon" delay={100}/>
            </>}/>
          
          {/* <Route path = "/cart" element={<NewCart/>}/>
          <Route path = "/checkout-success" element={<CheckoutSuccess/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/not-found" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>} /> */}


          <Route path = "/FineTuneGemma" exact element={<><FineTuneGemma/></>}/>
          <Route path = "/Chat" exact element={<><ChatbotIframe/></>}/>
          </Routes>

      </BrowserRouter>

      <Footer/>

    </div>
  )
}

export default App
