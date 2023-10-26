import React,{useState} from 'react'
import "./App.css";
import User from './components/User';

export default function App() {
  const [name,setName] = useState("Nur");
  console.log(name)
  return (
    <div className="App">
      <h1>App</h1>
      <User name={name}/>
      <button onClick={()=>setName("nur-e-azam")}>Update name</button>
    </div>
  )
}

