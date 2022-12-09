import { useState } from "react";  
import * as React from 'react'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';     
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
 
const movieValidationSchema = yup.object({
name:yup.string().required(),
poster:yup.string().required().min(5),
rating:yup.number().required().min(0).max(10),
summary:yup.string().required().min(20),
trailer:yup.string().required().min(10).url(),
})

export function AddMovie({movieList,setMovieList}){ 

  const { handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
    initialValues: {
      name:   "",
      poster: "",
      rating: "",
      summary:"",
      trailer:"",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovies) => {
      console.log("Form Values Are", newMovies);
      addmovie(newMovies);
  }
});
const addmovie=(newMovies)=>{
  fetch("https://638f3a564ddca317d7f213a2.mockapi.io/movie",{
    method:"POST",
    body:JSON.stringify(newMovies),
    headers:{ "Content-type" : "application/json" }
  }).then(()=>navigate("/Movie"));
  
}

  const navigate = useNavigate();

    return(
        <form onSubmit={handleSubmit} className="addmovie-outer">
        <TextField id="outlined-basic" 
        label="Enter the Movie name"   
        variant="outlined"    
        value={values.name}
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.name && errors.name ? errors.name : null}
        
        <TextField id="outlined-basic" 
        label="Enter the Movie poster" 
        variant="outlined"    
        value={values.poster}
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.poster && errors.poster ? errors.poster : null}
        
        <TextField id="outlined-basic" 
        label="Enter the Movie rating" 
        variant="outlined"    
        value={values.rating}
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.rating && errors.rating ? errors.rating : null}
        
        <TextField id="outlined-basic" 
        label="Enter the Movie summary" 
        variant="outlined"    
        value={values.summary}
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.summary && errors.summary ? errors.summary : null}
        
        <TextField id="outlined-basic" 
        label="Enter the Movie Trailer" 
        variant="outlined"    
        value={values.trailer}
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {touched.trailer && errors.trailer ? errors.trailer : null}
        
        <Button variant="contained" type="submit">
        Add movie</Button>
      </form>
    );
}