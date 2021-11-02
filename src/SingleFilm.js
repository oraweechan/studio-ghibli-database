// import React, { useEffect,useState } from "react";

function SingleFilm(props) {
  console.log(props)

//   const filmJSX = props.filmList.map((film, index) => {
//     //   console.log(film)
//       return (
//         <div key={index}>
//           <h3>{film.title}</h3>
//           <img src={film.movie_banner} alt='' />
//           <p>Directed by: {film.director}</p>
//           <p>Produced by: {film.producer}</p>
//           <p>{film.description}</p>
  
//         </div>
//       );
//   });


  return (
    <div className="singleFilm">
       <h1>Single Film</h1>
       {/* {filmJSX} */}
     
    </div>
  );
  }

export default SingleFilm;