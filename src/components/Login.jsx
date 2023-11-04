import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const hendelLogin = ()=>{
        localStorage.setItem('login', true);
        navigate('/')
    }
    
  return (
    <div>
        <div>
        <h1>Login</h1>
        </div>
        <div>
            <input placeholder='user name'/>
            <input placeholder='password'/>
            <button onClick={()=>{hendelLogin()}}>Log in</button>
            {/* <button onClick={()=>{hendelLogout()}}>Log out</button> */}


        </div>
        

    </div>
  )
}
