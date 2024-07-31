import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[content,setContent]=useState([])

  useEffect(()=>(
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data.categories);
      setContent(data.categories)
    }
    )
  ),[])

  return (
    <div style={{display:"flex"}}>
      <h2>Hello</h2>
      <button>Fav</button>
    </div>
  )
}

export default App
