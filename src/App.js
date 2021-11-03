import Films from "./Films";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import MyFavorites from "./MyFavorites";
import SingleFilm from "./SingleFilm";
import React, { useState } from "react";

function App() {
  const [selectedFilm, setSelectedFilm] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);

  const handleFilmClick = (film) => {
    // console.log(film)
  setSelectedFilm(film);
}

const addToFavorites = (film) => {
  // console.log(film)
  setFavoriteList([...favoriteList, film])
}

const removeFromFavorites = (removeIndex) => {
  // console.log(removeIndex)
  let newFavorites = favoriteList.filter((film, index) => {
    return index !== removeIndex
  })
  setFavoriteList(newFavorites)
}



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {" "}
          <Films handleFilmClick={handleFilmClick}/>{" "}
        </Route>
        <Route exact path="/homepage" render={() => <Redirect to="/" />} />
        <Route exact path="/myFavorites" render={() => <MyFavorites removeFilm={removeFromFavorites} favorites={favoriteList} />} />
        <Route exact path='/film/:filmTitle' render={(routerProps) => <SingleFilm addToFavorites={addToFavorites} filmId={selectedFilm}/>} />
      </Switch>
    </div>
  );
}

export default App;
