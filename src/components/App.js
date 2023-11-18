import React from "react";

import { data } from "../data";
import NavBar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";
import { StoreContext } from "..";

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    const { store } = this.props;
    // get the data from the API call
    // Subscribe the current component to the store, so that when the store state changes it will re render again
    store.subscribe(() => {
      this.forceUpdate();
    });
    // Dispatch the ADD movies action to add data to the store
    console.log("Data", data);
    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    return movies.favourites.indexOf(movie) >= 0;
  };

  changeSetFavourite(value) {
    // Dispatch the ADD movies action to add data to the store
    const { store } = this.props;
    store.dispatch(setShowFavourite(value));
  }

  render() {
    const { store } = this.props;
    const { movies, search } = store.getState();
    const { list, favourites, showFavourites } = movies;

    const movie_list = showFavourites ? favourites : list;
    return (
      <div className="App">
        {/* nav bar component */}
        <NavBar dispatch={store.dispatch} search={search} />
        {/* main container */}
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeSetFavourite(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeSetFavourite(true)}
            >
              Favoutites
            </div>
          </div>

          <div className="list">
            {movie_list && movie_list.length === 0 && (
              <div className="no-movies">No movies to display!</div>
            )}
            {console.log("Movie list", movie_list)}
            {movie_list.map((movie, index) => (
              <MovieCard
                movie={movie}
                dispatch={store.dispatch}
                key={`movie-${index}`}
                isMovieFavourite={this.isMovieFavourite(movie)}
                store={store}
              />
            ))}
          </div>
        </div>
        {/* tabs */}
        {/* movie cards */}
      </div>
    );
  }
}

// const AppWrapper = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => <App store={store} />}
//     </StoreContext.Consumer>
//   );
// };
const callback = (state) => {
  return {
    movies: state.movies,
    search: state.search,
  };
};

// 1st argument -> provide a callback function which will return required data from the core store
// 2nd argument -> provide the component to which the required data can be connected
const ConnectedAppComponent = connect(callback)(App);

export default ConnectedAppComponent;
