import Films from "./Components/Films";
import Header from "./Components/Header";
import { Route, Switch } from "react-router-dom";
import MyFavorites from "./Components/MyFavorites";
import SingleFilm from "./Components/SingleFilm";
import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./App.css";

function App() {
  const [filmList, setFilmList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [clearInput, setClearInput] = useState("");

  const makeAPICall = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((json) => {
        setFilmList(json);
      });
  };

  useEffect(() => {
    makeAPICall();
  }, [clearInput]);

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
  };

  const handleClearClick = () => {
    setClearInput(0);
    setSearchTerm("");
    setSearchResults(filmList);
  };

  const addToFavorites = (film) => {
    setFavoriteList([...favoriteList, film]);
  };

  const removeFromFavorites = (removeIndex) => {
    let newFavorites = favoriteList.filter((film, index) => {
      return index !== removeIndex;
    });
    setFavoriteList(newFavorites);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newFilmList = filmList.filter((film) => {
        return Object.values(film)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newFilmList);
    } else {
      setSearchResults(filmList);
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
            <Switch>
              <Route exact path="/">
                {" "}
                <Form
                  handleClearClick={handleClearClick}
                  term={searchTerm}
                  searchKeyword={searchHandler}
                />
                <Films
                  filmList={searchTerm.length < 1 ? filmList : searchResults}
                  handleFilmClick={handleFilmClick}
                />{" "}
              </Route>
              <Route
                exact
                path="/myFavorites"
                render={() => (
                  <MyFavorites
                    removeFilm={removeFromFavorites}
                    favorites={favoriteList}
                  />
                )}
              />
              <Route
                exact
                path="/film/:filmTitle"
                render={() => (
                  <SingleFilm
                    addToFavorites={addToFavorites}
                    filmId={selectedFilm}
                  />
                )}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
