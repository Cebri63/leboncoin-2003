import React from "react";
import { useHistory } from "react-router-dom";
const moment = require("moment");
require("moment/locale/fr");
moment.locale();

const Card = ({ offer }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(`/offer/${offer._id}`, { id: offer._id })}
      className="card"
    >
      <div className="picture">
        {offer.pictures[0] ? (
          <img alt="offer" src={offer.pictures[0]} />
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
    </div>
  );
};

export default Card;
