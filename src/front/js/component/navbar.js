import React from "react";
import { Link } from "react-router-dom";
import logoZusset from "../../img/logo-zusset.png";

export const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "black" }}>
      <div className="container">
        <Link to="/">
          <img
            src={logoZusset}
            style={{ width: "200px", height: "100px", objectFit: "cover" }}
          />
        </Link>
        <div className="ml-auto">
          <Link to="/signup">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
