import React from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
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
        <ul>
          <li><Link to='student' state={{name:'noor',age:26}}>Student</Link></li>
          <li><Link to='emply'>Employ</Link></li>
          <li><Link to='ceo'>CEO</Link></li>
        </ul>
        <Outlet/>
    </div>
  )
}
