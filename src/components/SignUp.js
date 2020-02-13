import React from "react";

const SignUp = ({
  handleSubmit,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  setCheckbox,
  checkbox
}) => {
  return (
    <div className="signup-container">
      <div className="why-card">Pourquoi créer un compte ?</div>
      <div className="signup-card">
        <div className="title">CRÉER UN COMPTE</div>
        <form onSubmit={handleSubmit}>
          <p>Pseudo *</p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
          <p>Adresse email *</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <div className="password-and-confirm">
            <div>
              <p>Mot de passe *</p>
              <input
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <p>Confirmer le mot de passe *</p>
              <input
                type="password"
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="check-and-accept-conditions">
            <input onChange={() => setCheckbox(!checkbox)} type="checkbox" />
            <p>
              « J’accepte les <span>Conditions Générales de Vente </span> et les{" "}
              <span>Conditions Générales d’Utilisation »</span>
            </p>
          </div>

          <input value="Créer mon Compte Personnel" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
