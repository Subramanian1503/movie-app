// {
//     type: "ADD_MOVIES",
// }
// {
//     type: "REMOVE_MOVIES",
// }

// Action types
export const ADD_MOVIES = "ADD_MOVIES";

// Action creators
export const addMovies = (movies) => {
  return {
    type: ADD_MOVIES,
    movies,
  };
};
