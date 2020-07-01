import React from 'react';
import Section from '../../components/Section/Section';
import Popular from '../../components/Popular/Popular';
import MovieSummary from '../../components/MovieSummary/MovieSummary';
import Carousel from '../../components/Carousel/Carousel';

const MovieDetails = () =>{
  return(
    <div className="MovieDetails">
      <div className="container">
        <div className="column1">
          <Popular />
        </div>
        <div className="column2"> 
          <MovieSummary />
          <Section title="Photos"> <Carousel /> </Section>
          <Section title="Videos"> <p>here are children </p></Section>
          <Section title="This is A lot of Content"> <p>here are children </p></Section>
          <Section > <p>here are children </p></Section>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;