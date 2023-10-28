import React,{useState} from 'react'
import "./App.css";
import User from './components/User';
import Student from './components/Student';

export default function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
      <h1>App</h1>
      <Student/>
      <div>
      {show? <User/>:<h1>component remove!!</h1>}
      </div>
      
      <button onClick={()=>{setShow(!show)}}>Click to show/hide</button>
    </div>
  )
}

