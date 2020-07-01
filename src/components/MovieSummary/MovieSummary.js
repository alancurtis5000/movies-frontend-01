import React from 'react';
import FiveStarSVG from '../../icons/FiveStarSVG';
import PlaySVG from '../../icons/PlaySVG';

const MovieSummary = (props) => {
  return(
    <div className="MovieSummary">
      <div className="container">
        <div className="trailer">
          <PlaySVG size={90}/>
          <img src={`/Content/Movies/${props.key}/Images/trailer_01.jpg`} alt="trailer"/>
        </div>
        <div className="cover">
          <img src={`/Content/Movies/${props.key}/Images/cover_01.jpg`} alt="cover"/> 
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
              <FiveStarSVG size={200} amount={props.rating} id="starSVG"/>
              <div className="amount">{props.rating_count} ratings</div>
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