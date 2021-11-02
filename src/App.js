import Films from "./Films";
import Header from "./Header";
import { Route, Switch, Redirect } from "react-router-dom";
import MyFavorites from "./MyFavorites";
import SingleFilm from "./SingleFilm";
import React, { useState } from "react";

function App() {
  const [selectedFilm, setSelectedFilm] = useState("");

  const handleFilmClick = (film) => {
    // console.log(film)
  setSelectedFilm(film);
}



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          {" "}
          <Films handleFilmClick={handleFilmClick}/>{" "}
        </Route>
        <Route path="/homepage" exact render={() => <Redirect to="/" />} />
        <Route exact path="/myFavorites">
          {" "}
          <MyFavorites />{" "}
        </Route>
        <Route path='/film/:filmTitle' render={(routerProps) => <SingleFilm match={routerProps.match} filmId={selectedFilm}/>} />
      </Switch>
    </div>
  );
}

export default App;
