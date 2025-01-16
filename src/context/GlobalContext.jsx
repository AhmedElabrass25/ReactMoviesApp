import React, { createContext, useEffect, useReducer } from "react";
let initialvalue = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
// >>>>>>>>>>>>>>>Actions>>>>>>>>>>>>>>>>>>>>>
export const ADD_MOVIE_TO_WATCHLIST = "ADD_MOVIE_TO_WATCHLIST";
export const REMOVE_MOVIE_FORM_WATCHLIST = "REMOVE_MOVIE_FORM_WATCHLIST";
export const ADD_MOVIE_TO_WATCHED = "ADD_MOVIE_TO_WATCHED";
export const REMOVE_MOVE_FROM_WATCHED = "REMOVE_MOVE_FROM_WATCHED";
export const MOVE_TO_WATCHLIST = "MOVE_TO_WATCHLIST";
// >>>>>>>>>>>>>>>>>>>>
// Actions
// >>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>
// >>>>>>>>>>reducer function
// >>>>>>>>>>>>>>>
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST:
      return { ...state, watchlist: [action.payload, ...state.watchlist] };
    case REMOVE_MOVIE_FORM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID != action.payload
        ),
      };
    case MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter((movie) => movie != action.payload),
        watchlist: [action.payload, ...state.watchlist],
      };
    case ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watched: [action.payload, ...state.watched],
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID != action.payload.imdbID
        ),
      };
    case REMOVE_MOVE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID != action.payload
        ),
      };
    default:
      return state;
  }
};
// >>>>>>>>>>>>
// >>>>>>>>>>reducer function
// >>>>>>>>>>>>>>>
export let GlobalContext = createContext(initialvalue);
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
