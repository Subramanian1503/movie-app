import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
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
          {data.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
      {/* tabs */}
      {/* movie cards */}
    </div>
  );
}

export default App;
