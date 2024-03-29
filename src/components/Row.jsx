import React, { useEffect, useState } from 'react'
import'./Row.css'
import instance from '../instance';

function Row({tittle,fetchUrl,isPoster}) { 

const[movies,setMovies]= useState([]) 
                                   
const base_url = "https://image.tmdb.org/t/p/original"; 




    const fetchData = async()=>{   
      const response = await instance.get(fetchUrl)
      


     
      setMovies(response.data.results)  
    }
    console.log(movies); 



    useEffect(()=>{  
      fetchData()
    },[]) 


  return (
    <div className='row'>
      <h2>{tittle}</h2> 


      <div className="movie-row">
      
    { movies.map(item=>(<img className= {`movie ${isPoster?'movie-poster':'movie'}`}  src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="poster" />)  )  
    }     
        
        </div> 
        </div>
  )
}

export default Row