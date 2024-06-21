
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
const [jokes,setJokes]=useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setJokes(response.data)
  })
  .catch((error)=>{
    console.log(error
    )
  })
},[])

return (
<>
   <h1>This is a jokes Page</h1>
    <h1>Number of jokes {jokes.length}</h1>
   {
    jokes.map((jok)=>{
      return(
        <div key={jok.id}>
      <h2>{jok.id}</h2>
      <h3>{jok.joke}</h3>
      </div>
      )
    })
   }
</>
  )
}

export default App
