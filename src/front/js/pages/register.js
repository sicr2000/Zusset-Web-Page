import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [newUser, setNewUser] = useState({
    "name": "",
    "email": "",
    "password": "",
    "password_check": "",
  });

  async function addNewUser() {
    if (newUser.password == newUser.password_check) {
      let created = await actions.register(newUser);
      if (created) navigate("/private");
      else alert("An error has occured");
    } else {
      alert("Password doesn't match");
    }
  }

  useEffect(() => {
    store.token && navigate("/private");
  });

  return (
    <>
      <div className="signup-box text-center" style={{ marginTop: "115px" }}>
        <section onSubmit={(e) => e.preventDefault}>
          <h1>Sign Up</h1>
          <h5 className="animate-charcter">It's free and only takes a minute</h5>
          <form>
          <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              autoComplete="nope"
              onChange={(e) => setNewUser({ ...newUser, "name": e.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="nope"
              onChange={(e) => setNewUser({ ...newUser, "last_name": e.target.value })}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              autoComplete="nope"
              onChange={(e) => setNewUser({ ...newUser, "email": e.target.value })}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="nope"
              onChange={(e) =>
                setNewUser({ ...newUser, "password": e.target.value })
              }
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Repeat password"
              autoComplete="nope"
              onChange={(e) =>
                setNewUser({ ...newUser, "password_check": e.target.value })
              }
            />
            <input type="button" value="Submit" onClick={() => addNewUser()} />
          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
        </section>
      </div>
      <h5 className="para-2">
        Already have an account? <a href="#">Login here</a>
      </h5>
    </>
  );
};
