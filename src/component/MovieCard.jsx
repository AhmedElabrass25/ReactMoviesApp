import React, { useContext } from "react";
import img from "../assets/images/img.jpg";
import {
  ADD_MOVIE_TO_WATCHED,
  ADD_MOVIE_TO_WATCHLIST,
  GlobalContext,
} from "../context/GlobalContext";

const MovieCard = ({ movie }) => {
  let { watchlist, watched, dispatch } = useContext(GlobalContext);

  function addToWatchList(movie) {
    dispatch({ type: ADD_MOVIE_TO_WATCHLIST, payload: movie });
    // console.log(movie);
  }
  function addToWatched(movie) {
    dispatch({ type: ADD_MOVIE_TO_WATCHED, payload: movie });
    // console.log(movie);
  }
  // >>>>>>>>>>>>>>
  // Disabled operations
  // >>>>>>>>
  const storedWatchlist = watchlist.find((m) => m.imdbID === movie.imdbID);
  const storedWatched = watched.find((m) => m.imdbID === movie.imdbID);
  const watchlistDisabled = storedWatchlist
    ? true
    : storedWatched
    ? true
    : false;
  const watchedDisabled = storedWatched ? true : false;
  // >>>>>>>>>>>>>>
  // disabled operations
  // >>>>>>>>

  return (
    <div
      className="col-lg-3 col-md-4 col-12 mb-4 shadow p-2 "
      key={movie.imdbID}
    >
      <img
        src={movie.Poster != "N/A" ? movie.Poster : img}
        style={{ height: "300px" }}
        className="w-100"
        alt="image"
      />
      <p
        className="w-100 text-center mt-2 mb-1 fs-5 fw-bold"
        style={{ color: "var(--primary-color)" }}
      >
        {movie.Title.split(" ").slice(0, 2).join(" ")}
      </p>
      <p className="w-100 text-center fw-bold">{movie.Year}</p>
      <div className="Buttons w-100 d-flex align-items-center justify-content-between gap-2">
        <button
          className="btn text-white text-capitalize"
          disabled={watchlistDisabled} //vip
          style={{
            backgroundColor: "var(--secondary-color)",
            letterSpacing: "1px",
          }}
          onClick={() => addToWatchList(movie)}
        >
          watchlist
        </button>
        <button
          className="btn text-white text-capitalize"
          style={{
            backgroundColor: "var(--secondary-color)",
            letterSpacing: "1px",
          }}
          onClick={() => addToWatched(movie)}
          disabled={watchedDisabled} //vip
        >
          watched
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
