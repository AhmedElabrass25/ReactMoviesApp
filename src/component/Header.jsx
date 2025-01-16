import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="position-fixed w-100 top-0 left-0"
      style={{
        backgroundColor: "var(--primary-color)",
        padding: "15px 0px",
        zIndex: "100",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            {/* >>>>>>>>>>>>>>
            >>>>>>>>>Logo
            >>>>>>>>>>>>>>>> */}
            <div className="leftSide w-100">
              <Link
                to={"/"}
                className="text-capitalize text-white fs-4"
                style={{ fontWeight: "bold", letterSpacing: "1px" }}
              >
                {" "}
                movies
              </Link>
            </div>
          </div>
          {/* >>>>>>>>>>>>>>
            >>>>>>>>>Links
            >>>>>>>>>>>>>>>> */}
          <div className="col-6">
            <ul className="rightSide w-100 d-flex align-items-center justify-content-end gap-5">
              <li>
                <Link
                  className="text-white fw-600 text-capitalize"
                  style={{ letterSpacing: "1px", fontSize: "18px" }}
                  to={"/watchlist"}
                >
                  watchlist
                </Link>
              </li>
              <li>
                <Link
                  className="text-white fw-600 text-capitalize"
                  style={{ letterSpacing: "1px", fontSize: "18px" }}
                  to={"watched"}
                >
                  watched
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="btn text-white"
                  style={{ backgroundColor: "var(--secondary-color)" }}
                >
                  ADD
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
