import React, { useContext } from "react";
import { Context } from "../store/appContext";
import backgroundZusset from "../../img/IMG_3703.png";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div
        className="text-center mt-5"
        style={{ backgroundImage: "url(../img/IMG_3703.png)" }}
      >
        <h1>Hello Rigo!!</h1>
        <img src={backgroundZusset} style={{ zIndex: "-1" }} />
        <div className="alert alert-info">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
        </div>
        <p>
          This boilerplate comes with lots of documentation:{" "}
          <a href="https://start.4geeksacademy.com/starters/react-flask">
            Read documentation
          </a>
        </p>
      </div>
    </>
  );
};
