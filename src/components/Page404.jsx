import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div>
        <h1>404 Page</h1>
        <p>Page note found!</p>
        <button><Link to='/'>Back to Home</Link></button>
    </div>
  )
}
