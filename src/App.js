import Films from "./Films";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import MyFavorites from "./MyFavorites";
import React, { useEffect, useState } from "react";
import SingleFilm from "./SingleFilm";

function App() {
  const [filmList, setFilmList] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState([]);

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
    setSelectedFilm(film);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {" "}
          <Films handleFilmClick={handleFilmClick} filmList={filmList} />{" "}
        </Route>
        <Route path="/homepage" exact render={() => <Redirect to="/" />} />
        <Route exact path="/myFavorites">
          {" "}
          <MyFavorites />{" "}
        </Route>
        {/* <Route exact path = '/film/'> <SingleFilm filmList={filmList}/></Route> */}
        <Route
          path="/film/:filmTitle"
          render={(routerProps) => (
            <SingleFilm match={routerProps.match} film={selectedFilm} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
