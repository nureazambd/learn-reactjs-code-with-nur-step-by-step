import React,{useEffect,useState} from 'react'

export default function Student() {
    const [name,setName] = useState(" ");
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect call")
    },[count])
  return (
    <div>
        <h1>Student {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}
