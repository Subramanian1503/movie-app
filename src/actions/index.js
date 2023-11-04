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
