import { useEffect, useState } from 'react'
import './App.css'


const getItems=() => {
  let favList=sessionStorage.getItem('favs');
  if(favList){
    return JSON.parse(sessionStorage.getItem('favs'))
  }else{
    return []
  }
}

function App() {

  const[cont,setCont]=useState([])
  const[fav,setFav]=useState(getItems())

  useEffect(() => {
    console.log("retrieving items...");
    sessionStorage.setItem('favs', JSON.stringify(fav));
  }, [fav]);


  useEffect(()=>{
    // fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    // .then(res=>res.json())
    // .then(data=>{
    //   //console.log(data)
    //   setContent(data.categories)
    // }
    // )
    async function fetchName(){
      const res=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      const data=await res.json()
      setCont(data.categories)
    }
    fetchName();
},[]);

const handleFavClick=(item)=>{
  setFav([...fav,item])
}

  return (
    <>
     {cont.map((item)=>(
        <div key={item.idCategory} style={{display:"flex"}}>
          <h2>{item.strCategory}</h2>
          <button onClick={()=>handleFavClick(item)}>Fav</button>
        </div>
     ))}
     <h1>Fav Items : </h1>
     {fav.map((item)=>(
        <li key={item.idCategory}>
          {item.strCategory}
        </li>
     ))}
    </>
  )
}

export default App
