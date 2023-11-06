import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
export default function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    const name = searchParams.get('name')
    const [data, setData] = useState([]);

    useEffect(()=>{
      handelDataView();
    },[])

    function handelDataView(){
      fetch('http://localhost:3000/user').then((result)=>{
        result.json().then((resp)=>{
          // console.log(resp)
          setData(resp)
        })
      })
    }
    console.log(data)

    function deleteUser(id){
      fetch(`http://localhost:3000/user/${id}`,{
        method:'DELETE'
      }).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          handelDataView();
        })
      })
    }

  return (
    <div>
        <h1>Filter</h1>
        <h3>Age is: {age}</h3>
        <h3>Name is: {name}</h3>
        <input placeholder='Enter age' onChange={(e)=>{setSearchParams({age:e.target.value,name:'Salman'})}}/><br/>
        <button onClick={()=>{setSearchParams({age:50,name:'Salman'})}}>click</button>

        
          <table border="1">
              <tr>
                <td>id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
              </tr>
            {data.map((item)=>
              <tr>
                <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button onClick={()=>{deleteUser(item.id)}}>Delete</button></td>
            </tr>
            )}

          </table>
        
    </div>
  )
}
