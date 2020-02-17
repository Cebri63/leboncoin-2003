import React from "react";
import { Link } from "react-router-dom";
const moment = require("moment");
require("moment/locale/fr");
moment.locale();

const Card = ({ offer }) => {
  return (
    <Link to={`/offer/${offer._id}`} className="card">
      <div className="picture">
        {offer.picture ? (
          <img alt="offer" src={offer.picture.url} />
        ) : (
          <p>Pas de photo</p>
        )}
      </div>
      <div className="card-infos">
        <div className="title-price">
          <p>{offer.title}</p>
          <p>{offer.price} €</p>
        </div>
        <p>
          {moment(offer.created).format("L")} à{" "}
          {moment(offer.created).format("hh:mm")}
        </p>
      </div>
    </Link>
  );
};

export default Card;
