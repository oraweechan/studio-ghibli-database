import React, { useEffect,useState } from "react";
import SingleFilm from "./SingleFilm";

function Films() {
  const [filmList, setFilmList] = useState([]);

  const makeAPICall = () => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((json) => {
        setFilmList(json)
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  const filmListJSX = filmList.map((film) => {
    // console.log(film)
    return (
      <div>
        <h3>{film.title}</h3>
        <img src={film.image} alt='' />

      </div>
    );
  });


  return (
    <div className="App">
      <h1>hello world</h1>
      {filmListJSX}
      <SingleFilm films={filmList}/>
    
    </div>
  );
  }

export default Films;