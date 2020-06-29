import React from 'react';
const MovieSummary = (props) => {
  return(
    <div className="MovieSummary">
      MovieSummary
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
  rated: "PG-13",
  release_date: "05-23-2020",
  plot: "this is the simple plot of the movie, its and edge of the seat thriller, with no break.",
}

export default MovieSummary;