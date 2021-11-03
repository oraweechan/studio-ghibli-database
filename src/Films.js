import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Films(props) {
  const [filmList, setFilmList] = useState([]);

  const makeAPICall = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((json) => {
        setFilmList(json);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  const filmListJSX = filmList.map((film, index) => {
    // console.log(film)
    return (
      <div key={index}>
        <Link to={"/film/" + film.title}>
          <img
            onClick={() => {
              props.handleFilmClick(film.id);
            }}
            src={film.image}
            alt=""
          />
        </Link>
      </div>
    );
  });

  return (
    <div className="filmList">
      <h1>Film List</h1>
      {filmListJSX}
    </div>
  );
}

export default Films;
