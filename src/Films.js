import React, {  useState } from "react";
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

// import Form from "./Form";

// function Films(props) {


//   const filmListJSX = props.filmList.map((film, index) => {
//     // console.log(film)
//     return (
//       <div key={index}>
//         <Link to={"/film/" + film.title}>
          
//           <img
//           fluid
//           width="300"
//           height="450"
            // onClick={() => {
            //   props.handleFilmClick(film.id);
//             }}
//             src={film.image}
//             alt=""
//           />
        
//         </Link>
//       </div>
//     );
//   });



//   return (
//     <div className="filmList">
      
//       {filmListJSX}
      
//     </div>
//   );
// }

// export default Films;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 1000,
//     height: 1000,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

// export default function Films(props) {
//   const classes = useStyles();
//   console.log(props)

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={300}  spacing={30} className={classes.gridList}>
//         <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
//           {/* <ListSubheader component="div"></ListSubheader> */}
//         </GridListTile>
//         {props.filmList.map((film) => (
//           <GridListTile key={film.id}>
//             <Link to={"/film/" + film.title}>
            // <img onClick={() => {props.handleFilmClick(film.id)}} src={film.movie_banner} alt={film.title} />
//             </Link>
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

export default function Films(props) {
  return (
   
    <ImageList sx={{ width: 1200, height: 1000 }}>
      <ImageListItem key="Subheader" cols={2}>
       
      </ImageListItem>
      {props.filmList.map((film) => (

        <Link to={"/film/" + film.title}>

        <ImageListItem key={film.img}>
          <img
          onClick={() => {props.handleFilmClick(film.id)}}
            src={`${film.movie_banner}?w=248&fit=crop&auto=format`}
            srcSet={`${film.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={film.title}
          />
          <ImageListItemBar
            title={film.title}
            subtitle= {film.director}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${film.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
        </Link>
      ))}
    </ImageList>
 
  );
}