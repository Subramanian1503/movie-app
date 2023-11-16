import React from "react";
import { addMovies, handleMovieSearch } from "../actions";
import { StoreContext } from "..";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovies([movie]));
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    console.log("Search text", searchText);

    this.props.dispatch(handleMovieSearch(searchText));
  };

  render() {
    const { result, showSearchResults } = this.props.search;

    return (
      <div className="nav">
        <div className="search-container">
          <input
            onChange={(event) =>
              this.setState({
                searchText: event.target.value,
              })
            }
          />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />

                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add to movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class NavBarWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          return <Navbar store={store} search={this.props.search} />;
        }}
      </StoreContext.Consumer>
    );
  }
}

export default NavBarWrapper;
