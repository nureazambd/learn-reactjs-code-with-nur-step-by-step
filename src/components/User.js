import React,{useState} from 'react'

function User() {
  return (
    <div>
      <h1>User</h1>
      <HOCred cmp={Counter}/>
      <HOCskyblue cmp={Counter}/>
      <HOCgreen cmp={Counter}/>
     
    </div>
  )
}

function Counter(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>

    </div>
  )
}

function HOCred(props){
  return(
    <div>
      <div style={{backgroundColor:'red', padding:'5px', margin:'15px', width:'150px'}}>< props.cmp /></div>
      
    </div>
  )
}

function HOCskyblue(props){
  return(
    <div>
      
      <div style={{backgroundColor:'skyblue', padding:'5px', margin:'15px', width:'150px'}}>< props.cmp /></div>
     
    </div>
  )
}

function HOCgreen(props){
  return(
    <div>
      <div style={{backgroundColor:'green', padding:'5px', margin:'15px', width:'150px'}}>< props.cmp /></div>
    </div>
  )
}

export default User;

 
