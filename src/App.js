import React,{useState} from 'react'
import "./App.css";
import User from './components/User';
import Student from './components/Student';

export default function App() {
  const [show,setShow] = useState(true);
  const [count,setCount] = useState(100);

  return (
    <div className="App">
      <h1>App</h1>
      <Student count={count}/>
      <div>
      {show? <User/>:<h1>component remove!!</h1>}
      </div>
      
      {/* <button onClick={()=>{setShow(!show)}}>Click to show/hide</button> */}
      <button onClick={()=>{setCount(count+1)}}>Student count</button>

    </div>
  )
}

