import React from "react";

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-clip" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            <button className="favourite-btn">Add to Favourite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;