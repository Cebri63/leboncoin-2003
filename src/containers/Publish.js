import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState({});
  const [price, setPrice] = useState(0);

  const history = useHistory();

  const token = Cookies.get("token");
  // console.log(token);

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://leboncoin-api-final.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data"
          }
        }
      );
      history.push("/offer/" + response.data._id);
    } catch (e) {
      console.log("error request ", e.message);
    }
  };

  return token ? (
    <div className="publish-card">
      <div className="title">DÉPOSER UNE ANNONCE</div>
      <form onSubmit={onSubmit}>
        <p>Titre de l'annonce *</p>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <p>Texte de l'annonce *</p>
        <textarea
          rows="20"
          type="text"
          onChange={e => setDescription(e.target.value)}
        />
        <p>Prix *</p>
        <input type="number" onChange={e => setPrice(e.target.value)} />
        <p>Photo *</p>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <input value="Valider" type="submit" />
      </form>
    </div>
  ) : (
    <Redirect to="/log_in" />
  );
};

export default Publish;
