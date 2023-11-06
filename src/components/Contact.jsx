import React, { useState } from 'react'
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handelSubmit(){
    console.log(name, email, password)
    let data = {name, email, password}
    fetch('http://localhost:3000/user',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
      })
    })
  }
  
  
  return (
    <div>
        <h1>Contact</h1>
        <div>
          <h1>User From</h1>
          <input type='text' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
          <input type='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
          <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
          <button onClick={handelSubmit}>Submit</button><br/><br/>
        </div>
        
    </div>
  )
}
