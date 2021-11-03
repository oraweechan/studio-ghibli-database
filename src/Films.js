import React, {  useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Form from "./Form";

function Films(props) {


  const filmListJSX = props.filmList.map((film, index) => {
    // console.log(film)
    return (
      <div key={index}>
        <Link to={"/film/" + film.title}>
          <Col xs={12} sm={12} md={12}>
          <img
          fluid
          width="300"
          height="450"
            onClick={() => {
              props.handleFilmClick(film.id);
            }}
            src={film.image}
            alt=""
          />
          </Col>
        </Link>
      </div>
    );
  });

  return (
    <div className="filmList">
      
      {filmListJSX}
      
    </div>
  );
}

export default Films;
