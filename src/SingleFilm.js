import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function SingleFilm(props) {
    console.log(props)
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
        <img src={film.image} alt={film.title} />
        <p>Directed by: {film.director}</p>
        <p>Produced by: {film.producer}</p>
        <p>{film.description}</p>
        {/* <button onClick={() => props.addToFavorites(film)}>Add to Favorites</button> */}
        <Button
        variant="primary"
        onClick={() => props.addToFavorites(film)}
        >Add to Favorites</Button>
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
