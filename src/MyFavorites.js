function MyFavorites(props) {

  console.log(props)

  let myFavoritesJSX = props.favorites.map((film, index) => {
    return (
      <div key={index}>
        <p>{film.title}</p>
        <img src={film.image} alt={film.title} />
        <button onClick={() => props.removeFilm(index)}>Remove from Favorites</button>

     </div>
    );
  });

    return (
      <div className="MyFavorites">
              {myFavoritesJSX}
              favorites
      </div>
    );
    }
  
  export default MyFavorites;