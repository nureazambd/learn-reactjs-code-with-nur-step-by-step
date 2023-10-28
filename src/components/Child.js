import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Child(props) {
    const name = 'Salman'
  return (
    <div>
        <h1>Child</h1>
        <Button onClick={()=>props.display(name)}>Click</Button>
    </div>
  )
}
