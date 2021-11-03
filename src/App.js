import Films from "./Films";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import MyFavorites from "./MyFavorites";
import SingleFilm from "./SingleFilm";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./App.css"


function App() {
  const [filmList, setFilmList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);

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

  const handleFilmClick = (film) => {
    console.log(film)
    setSelectedFilm(film);
  };

  const addToFavorites = (film) => {
    // console.log(film);
    setFavoriteList([...favoriteList, film]);
  };

  const removeFromFavorites = (removeIndex) => {
    // console.log(removeIndex)
    let newFavorites = favoriteList.filter((film, index) => {
      return index !== removeIndex;
    });
    setFavoriteList(newFavorites);
  };

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm)
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newFilmList = filmList.filter((film) => {
        // console.log(Object.values);
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
          <Header />
          <Switch>
            <Route exact path="/">
              {" "}
              <Form 
                term={searchTerm} 
                searchKeyword={searchHandler} />
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
        </Row>
      </Container>
    </div>
  );
}

export default App;
