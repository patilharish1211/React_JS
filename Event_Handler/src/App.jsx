import React, { useState } from 'react'
import Post from './Components/Post'
import './App.css'


const App = () => {
  const [APIdata, setAPIdata] = useState([])
  const [btn, setbtn] = useState(true)
  let my = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>setAPIdata(data))
  }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column' >   
      {
      btn ? <button className='btn text-info border-light m-4 border-3' onClick={()=>{
        my()
        setbtn(false)
      }} style={{padding: '10px 20px', border: '2px solid black', borderRadius: '5px', outline: 'none', backgroundColor: 'gray', color: 'black', fontFamily: 'inherit', fontSize: '15px'}}>GET POSTS</button> : ''  
      }
      {
        APIdata.map((e)=><Post title={e.title} body={e.body}/>)
      }
    </div>
  )
}

export default App