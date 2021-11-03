import React, { useEffect, useState } from "react";

function SingleFilm(props) {
  //   console.log(props.filmId)
  const [film, setFilm] = useState({});

  const makeAPICall = () => {
    fetch(`https://ghibliapi.herokuapp.com/films/${props.filmId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setFilm(data);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, [props.filmId]);

  let filmJSX = "";
  if (film.title) {
    filmJSX = (
      <div>
        <h3>{film.title}</h3>
        <img src={film.movie_banner} alt={film.title} />
        <p>Directed by: {film.director}</p>
        <p>Produced by: {film.producer}</p>
        <p>{film.description}</p>
        <button onClick={() => props.addToFavorites(film)}>Add to Favorites</button>
      </div>
    );
  }

  return (
    <div className="singleFilm">
      {filmJSX}
    </div>
  );
}

export default SingleFilm;
