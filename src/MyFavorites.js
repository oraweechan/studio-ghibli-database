import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MyFavorites(props) {

  console.log(props)

  let myFavoritesJSX = props.favorites.map((film, index) => {
    return (
      <div className="favoritesList" key={index}>
        {/* <p>{film.title}</p>
        <img src={film.image} alt={film.title} />
        <button onClick={() => props.removeFilm(index)}>Remove from Favorites</button> */}
   

<Card sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  alt={film.title}
  height="240"
  image={film.movie_banner}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {film.title}
  </Typography>
  <button onClick={() => props.removeFilm(index)}>Remove from Favorites</button>
</CardContent>
</Card>
</div>
    );
  });

    return (
      <div className="MyFavorites">
              {myFavoritesJSX}
              
      </div>
    );
    }
  
  export default MyFavorites;