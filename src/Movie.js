import { useState } from "react";
import * as React from 'react';
import { CardActions, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Counter } from "./Counter.1";

export function Movie({ movie, id, delb }) {
  const [show, setShow] = useState(false);
  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  }
  const navigate = useNavigate();
  return (
    <div class="movie-container">
      <Card>
        <img className='movie-poster' src={movie.poster} alt="{movie.name}" />
        <CardContent>
          <div className='movie-name-rating'>
            <h2 className='movie-name'>{movie.name}
              <IconButton
                color="primary"
                onClick={() => setShow(!show)}
              >
                {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>

              <InfoIcon
                color="primary"
                onClick={() => navigate(`/Movie/${id}`)}
              >
              </InfoIcon>
            </h2>
            <p className='movie-rating' style={styles}>{movie.rating}</p>
          </div>

          {show ? <p className='movie-summary'>{movie.summary}</p> : null}
        </CardContent>
        <CardActions>
          <Counter /> {delb}
        </CardActions>
      </Card>
    </div>
  );
}



