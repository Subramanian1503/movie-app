import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../actions";

// Defining the initial state
const initialState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
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
