import { Movie } from "./Movie";
import * as React from 'react';  
import { useEffect } from "react";
import { useState } from "react";
import { IconButton } from "@mui/material"; 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


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

  const navigate=useNavigate()
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
              editb={
                <IconButton 
                aria-label="delete"
                color="secondary" 
                sx={{marginLeft:"auto"}}
                onClick={()=>navigate(`/Movie/edit/${mv.id}`)}
                >
                  <EditIcon/>
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}   