import React from "react";

import { addFavourite, unFavourite } from "../actions";

class MovieCard extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  handleFavouriteClick = () => {
    // Get the movie which needs to be marked as favourite
    const movie = this.props.movie;
    // Dispatch the action to add favourite with requested movie
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavouriteClick = () => {
    // Get the movie which needs to be marked as unfavourite
    const movie = this.props.movie;
    // Dispatch the action to add favourite with requested movie
    this.props.dispatch(unFavourite(movie));
  };
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
            {this.props.isMovieFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Un Favourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Add to Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
