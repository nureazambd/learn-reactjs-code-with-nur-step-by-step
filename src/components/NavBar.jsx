import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <ul className='headerList'>
            <li className='liStyle'><Link to='/'>Home</Link></li>
            <li className='liStyle'><Link to='/about'>About</Link></li>
            <li className='liStyle'><Link to='contact'>Contact Us</Link></li>
        </ul>
    </div>
  )
}
