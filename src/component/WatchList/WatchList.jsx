import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import WatchlistMovieCard from "./WatchlistMovieCard";

const WatchList = () => {
  let { watchlist } = useContext(GlobalContext);
  return (
    <section className="watchlistSec mt-5 pt-5">
      <div className="container">
        {/* >>>>>>>>>>>>>>>>>>>Title>>>>>>>>>>>>>>> */}
        <div className="head w-100 d-flex align-items-center justify-content-between mb-3">
          <h3
            className="text-capitalize"
            style={{ color: "var(--primary-color)", fontWeight: "700" }}
          >
            my watchlist
          </h3>
          <span
            style={{
              backgroundColor: "var(--secondary-color)",
              borderRadius: "10px",
              fontWeight: "700",
            }}
            className="py-1 px-2 text-white"
          >
            {watchlist.length}
            {watchlist.length === 1 ? " Movie " : " Movies"}
          </span>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>Title>>>>>>>>>>>>>>> */}
        <div className="row">
          {watchlist.length > 0 ? (
            watchlist.map((movie) => {
              return (
                <WatchlistMovieCard
                  movie={movie}
                  key={movie.imdbID}
                  type="watchlist"
                />
              );
            })
          ) : (
            <p
              className="w-100 text-center mt-4 fs-1"
              style={{ color: "#595353", fontWeight: "400" }}
            >
              {" "}
              There is no Watchlist movies .....!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WatchList;
