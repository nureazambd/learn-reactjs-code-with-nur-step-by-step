import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
export default function Filter() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState('');
  useEffect(()=>{
    getData();
  },[])
  function getData(){
    fetch('http://localhost:3000/user').then((result)=>{
      result.json().then((resp)=>{
        // console.log(resp)
        setData(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setPassword(resp[0].password)
        setUserId(resp[0].id)
      })
    })
  }
  console.log(data)
  function hendelUpdate(id){
    console.log('update',data[id-1])
  }
    
  function hendelUpdate(id){
        setName(data[id-1].name)
        setEmail(data[id-1].email)
        setPassword(data[id-1].password)
        setUserId(data[id-1].id)
  }

  function hendelDelete(id){
    fetch(`http://localhost:3000/user/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log('resp',resp);
        getData();
      })
    })
    
  }

  function updateUser(){
    console.log('update value', name, email, password, userId)
    let user = {name, email, password, userId}
    fetch(`http://localhost:3000/user/${userId}`,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp);
        getData();
      })
    })
  }

    

  return (
    <div>
        <h1>Filter</h1> 
        <table border="1">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Password</td>
                <td>Option</td>
              </tr>
            {data.map((item)=>
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button onClick={()=>hendelDelete(item.id)}>Delete</button></td>
              <td><button onClick={()=>hendelUpdate(item.id)}>Update</button></td>
            </tr>
            )}

          </table>

          <div>
            <h1>Update User</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <button onClick={updateUser}>Update</button>
          </div>
        
    </div>
  )
}
