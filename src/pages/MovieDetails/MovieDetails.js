import React from 'react';
import Section from '../../components/Section/Section';
import Popular from '../../components/Popular/Popular';
import MovieSummary from '../../components/MovieSummary/MovieSummary';
import Carousel from '../../components/Carousel/Carousel';

const MovieDetails = () =>{
  let images = [
    '/Content/Movies/TitleOfTheMovie/Images/img_01.jpg',
    '/Content/Movies/TitleOfTheMovie/Images/img_02.jpg',
    '/Content/Movies/TitleOfTheMovie/Images/img_03.jpg',
    '/Content/Movies/TitleOfTheMovie/Images/img_04.jpg'
  ]
  return(
    <div className="MovieDetails">
      <div className="container">
        <div className="column1">
          <Popular />
        </div>
        <div className="column2"> 
          <MovieSummary />
          <Section title="Photos"> <Carousel content={images} /></Section>
          <Section title="Videos"> <p>here are children </p></Section>
          <Section title="This is A lot of Content"> <p>here are children </p></Section>
          <Section > <p>here are children </p></Section>
        </div>
      </div>
    </div>
  )
}

MovieDetails.defaultProps = {
  key: "TheTitleOfTheMovie",
  id: 0
}

export default MovieDetails;