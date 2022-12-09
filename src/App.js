import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { Movielist } from './Movielist';
import { AddMovie } from './AddMovie';
import Button from '@mui/material/Button';

import * as React from 'react';
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 

import { ThemeProvider, createTheme } from '@mui/material/styles'; 

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
 
import Paper from '@mui/material/Paper'; 
import { MovieLists } from './MovieLists';
import { Addcolor } from './Addcolor'; 
import { Home } from './Home';
import { Basicform } from './Basicform';

function App() {  
  const [movieList,setMovieList] = useState([]);
  
  const navigate=useNavigate() 

  const [mode,setMode]=useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return ( 
    <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight:"100vh",borderRadius:"0"}} elevation={4} >
    <div className="App">   
      <AppBar position="static">
        <Toolbar> 
          <Button color="inherit" onClick={()=>navigate("/")}>     Home</Button>
          <Button color="inherit" onClick={()=>navigate("/Movie")}>Movie</Button>
          <Button color="inherit" onClick={()=>navigate("/AddMovie")}>Add Movie</Button>
          <Button color="inherit" onClick={()=>navigate("/ColorGame")}>Color Game</Button>
          {/* <Button color="inherit" onClick={()=>navigate("/Basic-form")}>Basicform</Button> */}

          <Button 
          color="inherit" 
          sx={{marginLeft:"auto"}}
          startIcon={mode=="light"? <Brightness4Icon /> : <Brightness7Icon />}
          onClick={()=> setMode(mode=="light"? "dark":"light" ) }
          >
            {mode=="light"? "dark":"light"}mode
          </Button>
        </Toolbar>
        
      </AppBar>
       
    <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/Movie" element={<Movielist />} />  
        <Route path="/AddMovie" element={<AddMovie movielists={movieList} setMovieList={setMovieList}/>} /> 
        <Route path="/ColorGame" element={<Addcolor />} /> 
        <Route path="/Movie/:abc" element={<MovieLists movielists={movieList}/>} /> 
        <Route path="/Basic-form" element={<Basicform />} /> 
        
      </Routes> 
    </div>
    </Paper>
    </ThemeProvider>
  );
} 

export default App;
