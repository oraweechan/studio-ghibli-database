import { Link } from "react-router-dom";
// import SingleFilm from "./SingleFilm";

function Films(props) {
  console.log(props)

  const filmListJSX = props.filmList.map((film, index) => {
    // console.log(film)
    return (
      <div key={index}>
        <h3>{film.title}</h3>
        <Link to ={"/film/" + film.title} onClick={() => props.handleFilmClick(...film)}>
        <img src={film.image} alt='' />
        </Link>

      </div>
    );
  });


  return (
    <div className="filmList">
      <h1>Film List</h1>
      {filmListJSX}
      {/* <SingleFilm films={filmList}/> */}
    
    </div>
  );
  }

export default Films;