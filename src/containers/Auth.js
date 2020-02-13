import React, { useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Auth = ({ onLogin }) => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const history = useHistory();

  const handleLoginSubmit = async e => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/user/log_in",
        {
          email: email,
          password: password
        }
      );
      if (response.data.token) {
        onLogin(response.data.token);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignupSubmit = async e => {
    try {
      e.preventDefault();
      if (!username || !email || !password || !confirmPassword || !checkbox) {
        alert("Veuillez remplir tous les champs");
      } else if (password !== confirmPassword) {
        alert("Vos mots de passe ne sont pas identiques");
      } else if (!checkbox) {
        alert("Veuillez accepter les CGV et CGU");
      } else {
        const response = await axios.post(
          " https://leboncoin-api.herokuapp.com/api/user/sign_up",
          {
            email: email,
            username: username,
            password: password
          }
        );
        if (response.data.token) {
          onLogin(response.data.token);
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {!signUp ? (
        <Login
          handleSubmit={handleLoginSubmit}
          setPassword={setPassword}
          setEmail={setEmail}
          onLogin={onLogin}
          setSignUp={setSignUp}
        />
      ) : (
        <SignUp
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          setUsername={setUsername}
          setCheckbox={setCheckbox}
          checkbox={checkbox}
          onLogin={onLogin}
          handleSubmit={handleSignupSubmit}
        />
      )}
    </div>
  );
};

export default Auth;
