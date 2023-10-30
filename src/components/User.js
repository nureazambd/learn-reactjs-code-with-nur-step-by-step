import React,{useState, useRef, forwardRef} from 'react'


function User(props, ref) {
  return (
    <div>
      <h1>User</h1>
      <input type='text' placeholder='Name' ref={ref}/><br/><br/>
    </div>
  )
}
export default forwardRef(User);