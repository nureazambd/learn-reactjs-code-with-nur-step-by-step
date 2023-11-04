import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Contact() {
  const navigate = useNavigate();
  const clickToHome = ()=>{
    let x = true
    if(x){
      navigate('/about')
    }
    else{
      navigate('/')
    }
    
  }

  function clickToAbout(url){
    navigate(url)
  }
  return (
    <div>
        <h1>Contact</h1>
        <button onClick={()=>{clickToHome()}}>Click to home</button>
        <button onClick={()=>{clickToAbout('/about')}}>Click to about</button>
    </div>
  )
}
