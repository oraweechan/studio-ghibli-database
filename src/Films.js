import React, {  useState } from "react";
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Col } from "react-bootstrap";


export default function Films(props) {
  return (
   <Col>
   <div className="image-list">
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
    </div>
    </Col>
  );
}