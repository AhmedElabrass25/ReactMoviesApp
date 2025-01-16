import React from "react";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchList from "./component/WatchList/WatchList";
import Watched from "./component/Watched/Watched";
import AddMovies from "./component/AddMovies";
import GlobalContextProvider from "./context/GlobalContext";
// apikey=bf780a82
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalContextProvider>
          <Header />
          <Routes>
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/" element={<AddMovies />} />
          </Routes>
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
