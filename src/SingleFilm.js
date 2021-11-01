// import React, { useEffect,useState } from "react";

function SingleFilm(props) {
//   console.log(props)

  const filmJSX = props.films.map((film) => {
      console.log(film.title)
      return (
        <div>
          <h3>{film.title}</h3>
          <img src={film.image} alt='' />
          <p>Directed by: {film.director}</p>
          <p>Produced by: {film.producer}</p>
          <p>{film.description}</p>
  
        </div>
      );
  });


  return (
    <div className="singleFilm">
       <h1>Single Film</h1>
        {/* <h3>{film.title}</h3>
        <img src={film.image} alt='' />
        <p>Directed by: {film.director}</p>
        <p>Produced by: {film.producer}</p>
        <p>{film.description}</p> */} */}
     
    
    </div>
  );
  }

export default SingleFilm;