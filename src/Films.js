import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function Films(props) {
  const [filmList, setFilmList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResults] = useState([]);

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

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm)
    setSearchTerm(searchTerm)
    if (searchTerm !== ""){
      const newFilmList = filmList.filter((film) => {
        return Object.values(film).join("").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(newFilmList);
    } else {
      setSearchResults(filmList);
    }

  };

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
      <Form term={searchTerm} searchKeyword={searchHandler} />
      {filmListJSX}
    </div>
  );
}

export default Films;
