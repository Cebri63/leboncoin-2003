import React, { useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";

import Reason from "../components/Reason";

const SignUp = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const history = useHistory();

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
          "https://leboncoin-api-final.herokuapp.com/user/sign_up",
          {
            email: email,
            username: username,
            password: password
          }
        );
        // console.log(response.data);

        if (response.data.token) {
          onLogin(response.data.token, response.data.account.username);
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="why-card">
        <div className="title">POURQUOI CRÉER UN COMPTE</div>
        <Reason
          icon="clock"
          title="Gagnez du temps"
          description="Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposer une nouvelle annonce."
        />
        <Reason
          icon="bell"
          title="Soyez les premiers informés"
          description="Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui vous intéresse."
        />
        <Reason
          icon="eye"
          title="Visibilité"
          description="Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contacts reçus)."
        />
      </div>
      <div className="signup-card">
        <div className="title">CRÉER UN COMPTE</div>
        <form onSubmit={handleSignupSubmit}>
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
