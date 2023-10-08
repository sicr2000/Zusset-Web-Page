import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import logoZusset from "../../img/logo-zusset.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav
      className="navbar fixed-top"
      style={{ backgroundColor: "black", width: "100%" }}
    >
      <div className="container">
        <Link to="/">
          <img
            src={logoZusset}
            style={{ width: "200px", height: "100px", objectFit: "cover" }}
          />
        </Link>
        {store.token && store.profile && (
          <div style={{ width: "400px", height: "100px", display: "block" }}>
            <div
              className="d-flex flex-row mb-3 justify-content-end align-items-center"
              style={{ height: "100px" }}
            >
              <div className="fs-5 text-light">
                {store.profile.name[0].toUpperCase() +
                  store.profile.name.substr(1)}{" "}
                {store.profile.last_name[0].toUpperCase() +
                  store.profile.last_name.substr(1)}
                &nbsp;&nbsp;&nbsp;
                <Link to="/private">
                  <i
                    className="fa-regular fa-circle-user"
                    style={{ color: "#ffffff" }}
                  />
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    actions.logOut();
                  }}
                >
                  <button className="btn btn-light">Logout</button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {!(store.token && store.profile) && (
          <div className="row ml-auto gx-3">
            <div className="col">
              <Link to="/register">
                <button className="btn btn-light">Register</button>
              </Link>
            </div>
            <div className="col">
              <Link to="/login">
                <button className="btn btn-light">Login</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
