import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

<BrowserRouter>
      {/* <ToastContainer/> */}
        <NavBar/>
        
          <Routes>
          
          <Route path = "/" exact element={<Home/>}/>
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
