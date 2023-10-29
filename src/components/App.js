// create your App component here
import React from 'react'
import { useEffect, useState } from 'react'

const API_url = "https://dog.ceo/api/breeds/image/random"

export default function App() {
    const [image, setImage] = useState(null)
    //
    useEffect(()=>{
        fetch(API_url)
        .then(res => res.json())
        .then(data => setImage(data.message))
    },[])

    if (!image){
        return(
            <p>Loading...</p>
        )
    }
  return (
    <div>
        <img src={image} alt='A Random Dog'></img>
    </div>
  )
}
