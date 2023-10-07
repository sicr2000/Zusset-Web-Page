import React from "react";
import { Link } from "react-router-dom";
import logoZusset from "../../img/logo-zusset.png";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "black", width: "100%" }}>
      <div className="container">
        <Link to="/">
          <img
            src={logoZusset}
            style={{ width: "200px", height: "100px", objectFit: "cover" }}
          />
        </Link>
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
      </div>
    </nav>
  );
};

export const NavbarUser = () => {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "black", width: "100%" }}>
      <div className="container">
        <Link to="/">
          <img
            src={logoZusset}
            style={{ width: "200px", height: "100px", objectFit: "cover" }}
          />
        </Link>
        <div className="row ml-auto gx-3">
          <div className="col">
            <Link to="/register">
              Profile picture
            </Link>
          </div>
          <div className="col">
            <Link to="/">
              <button className="btn btn-light">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};