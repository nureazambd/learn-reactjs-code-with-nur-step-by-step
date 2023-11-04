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
import ContactStudent from './components/ContactStudent';
import ContactEmploy from './components/ContactEmploy';
import ContactCEO from './components/ContactCEO';
import Login from './components/Login';
import Protected from './components/Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Protected Component={Home}/>}/>
        <Route path='/about' element={<Protected Component={About}/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
        <Route path='/contact/' element={<Protected Component={Contact}/>}>
          <Route path='student' element={<ContactStudent/>}/>
          <Route path='emply' element={<ContactEmploy/>}/>
          <Route path='ceo' element={<ContactCEO/>}/>
        </Route>
        <Route path='/filter' element={<Protected Component={Filter}/>}/>
        <Route path='/*' element={<Page404/>}/>
        <Route path='/user/:name' element={<Protected Component={User}/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/protedted' element={<Protected/>}/> */}
        {/* <Route path='/*' element={<Navigate to="/"/>}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;

