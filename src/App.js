import React,{useState,useRef} from 'react'
import "./App.css";
import "./Style.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Page404 from './components/Page404';
import User from './components/User';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/filter' element={<Filter/>}/>
        <Route path='/*' element={<Page404/>}/>
        <Route path='/user/:name' element={<User/>}/>
        {/* <Route path='/*' element={<Navigate to="/"/>}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;

