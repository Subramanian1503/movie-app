import React from "react";
import { handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSerachResults: true,
      searchText: "",
    };
  }

  handleSearchClick = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };

  render() {
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
        </div>
      </div>
    );
  }
}

export default Navbar;
