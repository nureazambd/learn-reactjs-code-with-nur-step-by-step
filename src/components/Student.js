import React,{useEffect,useState} from 'react'

export default function Student(props) {
    const [name,setName] = useState(" ");
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect call",props.count)
    },[props.count])
  return (
    <div>
        <h1>Student {props.count}</h1>
        <button onClick={()=>{}}>Click</button>
    </div>
  )
}
