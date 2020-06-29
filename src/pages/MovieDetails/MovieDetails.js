import React from 'react';
import Section from '../../components/Section/Section';
import Popular from '../../components/Popular/Popular';

const MovieDetails = () =>{
  return(
    <div className="MovieDetails">
      <div className="container">
        <div className="column1">
          <Popular />
        </div>
        <div className="column2"> 
          <div className="details">Hello</div>
          <Section > <p>here are children </p></Section>
          <Section > <p>here are children </p></Section>
          <Section > <p>here are children </p></Section>
          <Section > <p>here are children </p></Section>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;