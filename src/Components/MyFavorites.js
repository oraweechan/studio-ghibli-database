import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";

function MyFavorites(props) {
  let myFavoritesJSX = props.favorites.map((film, index) => {
    return (
      <div className="favoritesList" key={index}>
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
            <Button onClick={() => props.removeFilm(index)}>
              Remove from Favorites
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  });

  return <div className="MyFavorites">{myFavoritesJSX}</div>;
}

export default MyFavorites;
