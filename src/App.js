import React,{useState} from 'react'
import "./App.css";
import "./Style.css"
import style from "./Style.module.css"
import User from './components/User';
import Student from './components/Student';
import { Button,Card,Dropdown  } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Reusecom from './components/Reusecom';

export default function App() {
  const data = [
    {name:'Salman',email:'salman@gmail.com',contact:[
        {office:'098765',home:'0654321',personal:'012345'}
    ]},
    {name:'Paranto',email:'paranto@gmail.com',contact:[
        {office:'098765',home:'0654321',personal:'012345'}
    ]},
    {name:'Ashiq',email:'ashiq@gmail.com',contact:[
        {office:'098765',home:'0654321',personal:'012345'}
    ]},
    {name:'Hridoy',email:'hridoy@gmail.com',contact:[
        {office:'098765',home:'0654321',personal:'012345'}
    ]},
    {name:'Shourov',email:'shourov@gmail.com',contact:[
        {office:'098765',home:'0654321',personal:'012345'}
    ]}
]
  return (
    <div className="App">
      <Reusecom student={data}/>
    </div>
  )
}

