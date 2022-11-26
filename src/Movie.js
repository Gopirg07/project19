import { useState } from "react";


export function Movie({ movie }) {
  const [show, setShow] = useState(false);
  const styles={
    color:movie.rating>=8 ? "green":"red"
  }
  return (
    <div class="movie-container">
      <img className='movie-poster' src={movie.poster} alt="{movie.name}" />
      <div className='movie-name-rating'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p className='movie-rating' style={styles}>{movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle the description</button>
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
    </div>

  );
}
