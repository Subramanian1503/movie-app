import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_SHOW_FAVOURITE,
  ADD_MOVIE_SEARCH_RESULT,
} from "../actions";

// Defining the initial state
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: [...action.movies, ...state.list],
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: [
          state.favourites.filter((favouriteMovie) => {
            if (favouriteMovie.name !== action.movie.name) {
              return true;
            }
            return false;
          }),
        ],
      };
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.value,
      };
    default:
      return state;
  }
}

// Define a initial state for search
const initialSearchState = {
  result: {},
  showSearchResults: false,
};

// Create a reducer for search
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_MOVIE_SEARCH_RESULT:
      return {
        ...state,
        result: action.movieResult,
        showSearchResults: true,
      };
    case ADD_MOVIES:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

// Define a inital state for root reducer
// const initialState = {
//   movies: initialMoviesState,
//   search: initialSearchState,
// };

// Create a reducer as root
// export default function rootReducer(state = initialState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies,
  search: search,
});
