import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../store/profile";

import "./login.css";

const LogIn = () => {
  const dispatch = useDispatch();

  const textError = "Incorrect login or password";

  const [text, setText] = useState(false);

  const loginChange = (e) => {
    dispatch(profileActions.setLogin(e.target.value));
  };

  const passwordChange = (e) => {
    dispatch(profileActions.setPassword(e.target.value));
  };

  const profile = useSelector((state) => state.profile);

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    if (profile.login === "admin" && profile.password === "1234") {
      dispatch(profileActions.setIsLoggedIn(true));
      navigate("/");
    } else {
      setText(true);
    }
  };

  return (
    <div className="wrapper">
      <form className="form-wrapper" action="#" onSubmit={logIn}>
        <input
          type="text"
          placeholder="Login"
          required
          value={profile.login}
          onChange={loginChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={profile.password}
          onChange={passwordChange}
        />
        <button className="btn-submit" type="submit">
          Log in
        </button>
        {text ? <div className="error">{textError}</div> : null}
      </form>
    </div>
  );
};

export default LogIn;
