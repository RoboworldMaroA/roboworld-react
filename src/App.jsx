import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import HomeProjects from './components/HomeProjects';
import DelayedParagraph from './components/DelayedParagraph'
import DisplayCharacterByCharacter from './components/DisplayCharacterByCharacter';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/rajdhani";


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
            <HomeProjects/>
            
            </> }/>

          <Route path = "/Welcome" exact element={<DelayedParagraph delay={1000} delay2={2000}/>}/>
          <Route path = "/WelcomeNew" exact element={<DisplayCharacterByCharacter text="Heello World" delay={100}  />}/>
          
          {/* <Route path = "/cart" element={<NewCart/>}/>
          <Route path = "/checkout-success" element={<CheckoutSuccess/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/not-found" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>} /> */}

          </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
