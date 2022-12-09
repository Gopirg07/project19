import { Movie } from "./Movie";
import * as React from 'react';  
import { useEffect } from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export function Movielist() {  

 const [movieList,setMovieList] = useState([]);

  const getMovies= ()=>{
    fetch("https://638f3a564ddca317d7f213a2.mockapi.io/movie",{method:"GET"})
    .then((data)=>data.json())
    .then((data1)=>setMovieList(data1));
  }

  useEffect(()=> getMovies(),[])

  const deletemovie= (id)=>{
    fetch(`https://638f3a564ddca317d7f213a2.mockapi.io/movie/${id}`,
    {method:"DELETE"}).then((data)=>getMovies());
  }
  return (  
    <div>  
      <div className="movie-list"> 
        {movieList.map((mv) => (
          <div key={mv.id}> 
            <Movie
              movie={mv} id={mv.id} 
              delb={
                <IconButton 
                aria-label="delete"
                color="error"
                sx={{marginLeft:"auto"}}
                onClick={()=>deletemovie(mv.id)}
                > 
                <DeleteIcon />
                </IconButton> 
              } 
            />
          </div>
        ))}
      </div>
    </div>
  );
}   