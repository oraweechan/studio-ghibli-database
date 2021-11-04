import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";


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
      <div className="singleFilm">
        
        <Row>
        <Col xs={12} sm={12} md={6}>
        
        <Image src={film.image} fluid />
        {/* <img src={film.image} alt={film.title} /> */}
        </Col>
        <Col className="filmDetails" xs={12} sm={12} md={6}>
          <h3>{film.title}</h3>
          
          <p>Directed by: {film.director}</p>
            
          <p>Produced by: {film.producer}</p>
            
          <p>Release Date: {film.release_date}</p>
        
          <p>{film.description}</p>
        {/* <button onClick={() => props.addToFavorites(film)}>Add to Favorites</button> */}
        <Col className="AddtoFavoritesBtn"> 
        <Button
        variant="primary"
        onClick={() => props.addToFavorites(film)}
        >Add to Favorites</Button>
        </Col>
        </Col>
        </Row>
        
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
