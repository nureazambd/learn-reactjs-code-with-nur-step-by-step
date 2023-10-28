import React,{useState} from 'react'
import "./App.css";
import "./Style.css"
import style from "./Style.module.css"
import User from './components/User';
import Student from './components/Student';

export default function App() {
  const [show,setShow] = useState(true);
  const [count,setCount] = useState(100);

  return (
    <div className="App">
      <h1 className='type1'>App Style type - 1</h1>
      <h1 style={{color:"red",fontSize:'500',backgroundColor:'black'}}>App Style type - 2</h1>
      <h1 className={style.type3}>App Style type - 3</h1>

      <Student count={count}/>
      <div>
      {show? <User/>:<h1>component remove!!</h1>}
      </div>
      
      {/* <button onClick={()=>{setShow(!show)}}>Click to show/hide</button> */}
      <button onClick={()=>{setCount(count+1)}}>Student count</button>

    </div>
  )
}

