import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul className='headerList'>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}}  to='/'>Home</NavLink></li>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/about'>About</NavLink></li>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/contact'>Contact Us</NavLink></li>
            <li className='liStyle'><NavLink className='textColorNav' style={{ textDecoration:'none'}} to='/Filter'>Filter</NavLink></li>

        </ul>
    </div>
  )
}
