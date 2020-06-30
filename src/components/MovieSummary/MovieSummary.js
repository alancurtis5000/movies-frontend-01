import React from 'react';
import FiveStarSVG from '../../icons/FiveStarSVG';

const MovieSummary = (props) => {
  return(
    <div className="MovieSummary">
      <div className="container">
        <div className="trailer">
          <img src="/movies/irresitable/images/trailer_01.jpg" alt=""/>
        </div>
        <div className="cover">
          <img src="/movies/irresitable/images/cover_01.jpg" alt=""/> 
        </div>
        <div className="content">
          <div className="header">
            <div className="separator"></div>
              <div className="title">{props.title}</div>
            <div className="separator"></div>
          </div>
          <div className="consensus">
            <div className="text">Critic Consensus</div>
            <div>{props.consensus}</div>
          </div>
          <div className="rating">
              <FiveStarSVG size={200} amount={1}/>
              <FiveStarSVG size={200} amount={.8}/>
              <FiveStarSVG size={200} amount={.5}/>
              <FiveStarSVG size={200} amount={.25}/>
              <FiveStarSVG size={200} amount={.1}/>
              {props.rating}
              <div className="amount">Total Count: {props.rating_count}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

MovieSummary.defaultProps = {
  id:0,
  title:"Title Of The Movie",
  key: "TitleOfTheMovie",
  images: "Movies/TitleOfTheMovie/Images",
  videos: "Movies/TitleOfTheMovie/Videos",
  director: ["Director1", "Director2"],
  rating: 1,
  rating_count: 289,
  rated: "PG-13",
  release_date: "05-23-2020",
  consensus: "A soft political satire that proves frustratingly less than the sum of its talented parts, Irresistible is anything but.",
  plot: "this is the simple plot of the movie, its and edge of the seat thriller, with no break.",
}

export default MovieSummary;