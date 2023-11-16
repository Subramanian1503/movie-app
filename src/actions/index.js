// {
//     type: "ADD_MOVIES",
// }
// {
//     type: "REMOVE_MOVIES",
// }

// Action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_MOVIE_SEARCH_RESULT = 'ADD_MOVIE_SEARCH_RESULT';

// Action creators
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};

export const addFavourite = (movie) => {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
};

export const unFavourite = (movie) => {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
};

export const setShowFavourite = (value) => {
  return {
    type: SET_SHOW_FAVOURITE,
    value,
  };
};

export const handleMovieSearch = (movieName) => {
  const fetchURL = `https://www.omdbapi.com/?apikey=f27ad85c&t=${movieName}`;
  // Fetch the movie name result using OMDB API
  return function fetchMovieInfo(dispatch) {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((movieResults) => {
        console.log("Movie results", movieResults);
        // Store the results in redux store
        dispatch(addMovieSearchResults(movieResults));
      });
  };
};

const addMovieSearchResults = (movieResult) => {
  return {
    type: ADD_MOVIE_SEARCH_RESULT,
    movieResult: movieResult,
  };
};
