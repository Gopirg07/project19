import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { IconButton, Paper, ThemeProvider, createTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { url } from "../global";
import axios from "axios";
import { toast } from "react-toastify";
import Appbar from "./Appbar";

export function Movielists() {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    let data = await axios.get(`${url}/movies`);
    // console.log(data);
    toast.success(data.data.message);
    setMovieList(data.data.data);
  };

  const deletemovie = async (id) => {
    console.log(id); 

    let data = await axios.delete(`${url}/movies/deleteMovieReview/${id}`);
    console.log(data);
    toast.error(data.data.message);
    getMovies();
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Appbar />
      <div className="movie-list">
        {movieList.map((mv, idx) => (
          <div key={idx}>
            <Movie
              movie={mv}
              id={mv._id}
              delb={
                <IconButton
                  aria-label="delete"
                  color="error"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => deletemovie(mv._id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              editb={
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => navigate(`/Movie/edit/${mv._id}`)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
