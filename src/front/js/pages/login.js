import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [newUser, setUser] = useState({
    email: "",
    password: "",
  });

  async function userLogin({ email, password }) {
    let isValid = await actions.login(email, password);
    if (isValid) {
      navigate("/private");
    }
  }

  useEffect(() => {
    store.token && navigate("/private");
  });

  return (
    <>
      <div className="pt-5" style={{ marginTop: "115px" }}>
        <div className="login-box">
          <section onSubmit={(e) => e.preventDefault}>
            <h1>Login</h1>
            <form>
              <label>Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                autoComplete="nope"
                onChange={(e) => setUser({ ...newUser, email: e.target.value })}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="nope"
                onChange={(e) =>
                  setUser({ ...newUser, password: e.target.value })
                }
              />
              <input
                type="button"
                value="Submit"
                onClick={() => userLogin(newUser)}
              />
            </form>
          </section>
        </div>
        <p className="para-2">
          Not have an account? <a href="register.html">Sign Up Here</a>
        </p>
      </div>
    </>
  );
};
