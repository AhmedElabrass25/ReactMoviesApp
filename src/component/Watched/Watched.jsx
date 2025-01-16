import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import WatchedMovieCard from "./WatchedMovieCard";

const Watched = () => {
  let { watched } = useContext(GlobalContext);

  return (
    <section className="watchlistSec mt-5 pt-5">
      <div className="container">
        {/* >>>>>>>>>>>>>>>>>>>Title>>>>>>>>>>>>>>> */}
        <div className="head w-100 d-flex align-items-center justify-content-between mb-3">
          <h3
            className="text-capitalize"
            style={{ color: "var(--primary-color)", fontWeight: "700" }}
          >
            my watched
          </h3>
          <span
            style={{
              backgroundColor: "var(--secondary-color)",
              borderRadius: "10px",
              fontWeight: "700",
            }}
            className="py-1 px-2 text-white"
          >
            {watched.length}
            {watched.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>Title>>>>>>>>>>>>>>> */}
        <div className="row">
          {watched.length > 0 ? (
            watched.map((movie) => {
              return (
                <WatchedMovieCard
                  movie={movie}
                  key={movie.imdbID}
                  type="watched"
                />
              );
            })
          ) : (
            <p
              className="w-100 text-center mt-4 fs-1"
              style={{ color: "#595353", fontWeight: "400" }}
            >
              {" "}
              There is no movies watched .....!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Watched;
