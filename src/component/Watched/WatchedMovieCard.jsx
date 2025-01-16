import React from "react";
import "./watchedmoviecard.css";
import MovieControls from "../MovieControls";
import img from "../../assets/images/img.jpg";
const WatchedMovieCard = ({ movie, type }) => {
  return (
    <>
      <div
        className="watchedmoviecard col-lg-3 col-md-4 col-12 mb-4 shadow p-2 "
        key={movie.imdbID}
      >
        <div className="imgDiv">
          <img
            src={movie.Poster != "N/A" ? movie.Poster : img}
            className="w-100 h-100"
            alt="image"
          />
        </div>
        <p className="w-100 text-center fw-bold">{movie.Year}</p>
        {/* >>>>>>>>> 
        Controls(watch or delete)
        >>>>>>>>>>>*/}
        <MovieControls movie={movie} type={type} />
      </div>
    </>
  );
};

export default WatchedMovieCard;
