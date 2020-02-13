import React from "react";

const Login = ({ handleSubmit, setEmail, setPassword, setSignUp }) => {
  return (
    <div>
      <div className="login-card">
        <div className="title">CONNEXION</div>
        <form onSubmit={handleSubmit}>
          <p>Adresse email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <p>Mot de passe</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <input value="Se connecter" type="submit" />
          <p className="no-account">Vous n'avez pas de compte ?</p>
          <input
            onClick={() => setSignUp(true)}
            value="Créer un compte"
            type="button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
