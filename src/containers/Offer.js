import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const moment = require("moment");
require("moment/locale/fr");

const Offer = props => {
  const params = useParams();
  let id = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leboncoin-api.herokuapp.com/api/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="offer-container">
      <div className="offer-creator">
        <div className="offer">
          <div className="offer-picture">
            <img alt="offer" src={data.pictures[0]} />
          </div>
          <div className="offer-infos">
            <div className="title-price">
              <p>{data.title}</p>
              <p>{data.price} €</p>
            </div>
            <p>
              {moment(data.created).format("L")} à{" "}
              {moment(data.created).format("hh:mm")}
            </p>
          </div>
        </div>
        <div className="creator">
          <p>{data.creator.account.username}</p>
          <button>
            <FontAwesomeIcon
              className="shopping-cart-icon"
              icon="shopping-cart"
            />
            Acheter
          </button>
        </div>
      </div>
      <p className="description-title">Description</p>
      <p className="description">{data.description}</p>
    </div>
  );
};

export default Offer;
