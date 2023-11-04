import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li><Link to='/user/shuvro'>Shuvro</Link></li>
        <li><Link to='/user/salman'>Salman</Link></li>
        <li><Link to='/user/hridoy'>Hridoy</Link></li>
      </ul>
    </div>
  )
}
