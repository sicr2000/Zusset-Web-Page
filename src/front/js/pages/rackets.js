import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    !store.token && navigate("/");
  });

  return (
    <>
      <div className="text-center body">
        <div className="h-100 row justify-content-center">
          {store.profile && (
            <div className="col-8 text-center">
              
            </div>
          )}
        </div>
      </div>
    </>
  );
};
