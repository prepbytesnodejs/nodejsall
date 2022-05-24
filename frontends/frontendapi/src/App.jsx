import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Login from './components/Login'
import Home from './components/Home'
import {

  Routes,
  Route,
} from "react-router-dom";
import SingleProduct from './components/SingleProduct'

function App() {



  return (
    <div className="container">

<Routes>
      <Route path="/products" element={<Home/>}/>

      <Route path="/products/:productid" element={<SingleProduct/>}/>
   
      
    </Routes>




      
     
    </div>
  )
}

export default App
