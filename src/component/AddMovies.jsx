import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";
const AddMovies = () => {
  const [searchVal, setSearchVal] = useState("");
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    await axios
      .get(
        `https://www.omdbapi.com/?s=${
          searchVal.toLocaleLowerCase()
            ? searchVal.toLocaleLowerCase()
            : "harry potter"
        }&apikey=bf780a82`
      )
      .then((res) => {
        let movies = res.data.Search;
        setMovies(movies);
        // console.log(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getMovies();
  }, [searchVal]);

  return (
    <section className="AddMovieSec mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <input
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
              type="text"
              className="w-75 p-2 text-white fs-6"
              style={{
                backgroundColor: "var(--primary-color)",
                border: "1px solid white",
                borderRadius: "3px",
              }}
              placeholder="Enter movie name.........!"
            />{" "}
          </div>
          {movies &&
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.imdbID} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default AddMovies;
