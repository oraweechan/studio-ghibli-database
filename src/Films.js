import React, {  useState } from "react";
import { Link } from "react-router-dom";
// import Form from "./Form";

function Films(props) {


  const filmListJSX = props.filmList.map((film, index) => {
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
   
      {/* <Form term={searchTerm} searchKeyword={searchHandler} /> */}
      {filmListJSX}
    </div>
  );
}

export default Films;
