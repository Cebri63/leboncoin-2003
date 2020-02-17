import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginSubmit = async e => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://leboncoin-api-final.herokuapp.com/user/log_in",
        {
          email: email,
          password: password
        }
      );
      if (response.data.token) {
        onLogin(response.data.token, response.data.account.username);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="login-card">
        <div className="title">CONNEXION</div>
        <form onSubmit={handleLoginSubmit}>
          <p>Adresse email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <p>Mot de passe</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <input value="Se connecter" type="submit" />
          <p className="no-account">Vous n'avez pas de compte ?</p>
          <input
            onClick={() => history.push("/sign_up")}
            value="Créer un compte"
            type="button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
