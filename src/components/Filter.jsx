import React from 'react'
import {useSearchParams} from 'react-router-dom'
export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    const name = searchParams.get('name')

  return (
    <div>
        <h1>Filter</h1>
        <h3>Age is: {age}</h3>
        <h3>Name is: {name}</h3>
        <input placeholder='Enter age' onChange={(e)=>{setSearchParams({age:e.target.value,name:'Salman'})}}/><br/>
        <button onClick={()=>{setSearchParams({age:50,name:'Salman'})}}>click</button>
    </div>
  )
}
