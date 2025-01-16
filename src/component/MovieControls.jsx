import React, { useContext } from "react";
import {
  ADD_MOVIE_TO_WATCHED,
  GlobalContext,
  MOVE_TO_WATCHLIST,
  REMOVE_MOVE_FROM_WATCHED,
  REMOVE_MOVIE_FORM_WATCHLIST,
} from "../context/GlobalContext";

const MovieControls = ({ movie, type }) => {
  let { dispatch } = useContext(GlobalContext);
  function moveMovieFunc(movie) {
    dispatch({ type: ADD_MOVIE_TO_WATCHED, payload: movie });
  }
  function deleteMovieFunc(movie) {
    dispatch({ type: REMOVE_MOVIE_FORM_WATCHLIST, payload: movie.imdbID });
  }
  return (
    <>
      {/* >>>>>>>>>>>>>If type is watchlist */}
      {type === "watchlist" && (
        <div className="w-100 controls">
          <div className="content">
            <span className="" onClick={() => moveMovieFunc(movie)}>
              <i className="fa-solid fa-eye"></i>
            </span>
            <span className="" onClick={() => deleteMovieFunc(movie)}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
      )}
      {/* >>>>>>>>>>>>>If type is watched */}
      {type === "watched" && (
        <div className="w-100 controls">
          <div className="content">
            <span
              className=""
              onClick={() =>
                dispatch({
                  type: MOVE_TO_WATCHLIST,
                  payload: movie,
                })
              }
            >
              <i className="fa-solid fa-eye-slash"></i>
            </span>
            <span
              className=""
              onClick={() =>
                dispatch({
                  type: REMOVE_MOVE_FROM_WATCHED,
                  payload: movie.imdbID,
                })
              }
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieControls;
