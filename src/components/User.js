import React,{useState, useMemo} from 'react'

function User() {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);
  function countHendle(){
    console.log('countHendle')
    setCount(count+2)
  }
  function dataHendle(){
    console.log('dataHendle')
    setData(data*5)
  
  }

  const viewDataMemo = useMemo(function viewData(){
    console.log('viewData call')
    return data
  },[data])

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Data: {viewDataMemo}</h1>

      <button onClick={countHendle}>Count</button>
      <button onClick={dataHendle}>Data</button>


    </div>
  )
}
export default User;