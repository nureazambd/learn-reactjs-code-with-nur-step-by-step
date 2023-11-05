import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    const name = searchParams.get('name')
    const [data, setData] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
        result.json().then((resp)=>{
          // console.log(resp)
          setData(resp)
        })
      })
    },[])
    console.log(data)


  return (
    <div>
        <h1>Filter</h1>
        <h3>Age is: {age}</h3>
        <h3>Name is: {name}</h3>
        <input placeholder='Enter age' onChange={(e)=>{setSearchParams({age:e.target.value,name:'Salman'})}}/><br/>
        <button onClick={()=>{setSearchParams({age:50,name:'Salman'})}}>click</button>

        
          <table border="1">
              <tr>
                <td>userId</td>
                <td>id</td>
                <td>title</td>
                <td>body</td>
              </tr>
            {data.map((item)=>
              <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
            )}

          </table>
        
    </div>
  )
}
