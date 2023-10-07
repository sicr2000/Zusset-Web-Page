import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="text-center body">
        <div className="row justify-content-center">
          {/* {store.profile?.user && */}
            <h1
              className="text-white col-8 animate-charcter"
              style={{ fontSize: "100px", margin: "220px" }}
            >
              Welcome user.name
            </h1>
          {/* } */}
        </div>
        {/* <div className="alert alert-info">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
        </div>
        <p>
          This boilerplate comes with lots of documentation:{" "}
          <a href="https://start.4geeksacademy.com/starters/react-flask">
            Read documentation
          </a>
        </p> */}
      </div>
    </>
  );
};
