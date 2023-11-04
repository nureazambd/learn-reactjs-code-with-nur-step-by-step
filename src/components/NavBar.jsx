import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate();
  const login = localStorage.getItem('login')

  const hendelLogout = ()=>{
    localStorage.clear();
    navigate('/login')
}
  return (
    <div>
        <ul className='headerList'>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}}  to='/'>Home</NavLink></li>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/about'>About</NavLink></li>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/contact'>Contact Us</NavLink></li>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/Filter'>Filter</NavLink></li>
            {/* <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/login'>Login</NavLink></li> */}
            { login ? <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} onClick={()=>{hendelLogout()}}>Log out</NavLink></li> : null}



        </ul>
    </div>
  )
}
