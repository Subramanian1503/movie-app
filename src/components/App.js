import React from "react";

import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    // get the data from the API call
    // Subscribe the current component to the store, so that when the store state changes it will re render again
    store.subscribe(() => {
      this.forceUpdate();
    });
    // Dispatch the ADD movies action to add data to the store
    store.dispatch(addMovies(data));
  }

  render() {
    const { store } = this.props;
    const movies = store.getState();

    return (
      <div className="App">
        {/* nav bar component */}
        <Navbar />
        {/* main container */}
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favoutites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
        {/* tabs */}
        {/* movie cards */}
      </div>
    );
  }
}

export default App;
