import React,{useState, useRef} from 'react'


export default function User() {
const [name,setName] = useState();
const [email,setEmail] = useState();
const [password, setPassword] = useState();
let nameRef = useRef(null);
let emailRef = useRef();
let passwordRef = useRef();


function refHendle(){
  console.log('called', nameRef.current.value='nur')
  nameRef.current.style.color='red'
  nameRef.current.style.background='black'
  console.log(emailRef.current.value='nur@gmail.com')
  console.log(passwordRef.current.value='123456')
}


  return (
    <div>
      <h1>User</h1>
      <input type='text' placeholder='Name' ref={nameRef}/><br/><br/>
      <input type='text' placeholder='email' ref={emailRef}/><br/><br/>
      <input type='text' placeholder='Password' ref={passwordRef}/><br/><br/>
      <button onClick={refHendle}>Click</button>
    </div>
  )
}
