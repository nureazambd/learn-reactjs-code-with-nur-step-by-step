import React,{useState,useRef} from 'react'
import "./App.css";
import "./Style.css"
import style from "./Style.module.css"
import User from './components/User';
import Student from './components/Student';
import { Button,Card,Dropdown  } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Reusecom from './components/Reusecom';
import Table from 'react-bootstrap/Table';
import Child from './components/Child';

export default function App() {
  let userRef = useRef();
  function clickChange(){
    userRef.current.value='Salman'
    userRef.current.style.color='red'
    userRef.current.style.background='black'
    
    
  }
  return (
    <div className="App">
      <User ref={userRef}/>
      <button onClick={clickChange}>Click</button>
    </div>
  )
}

