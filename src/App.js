import React,{useState} from 'react'
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
  return (
    <div className="App">
      <User/>
    </div>
  )
}

