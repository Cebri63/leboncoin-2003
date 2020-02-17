import React, { useState, useEffect } from "react";

import axios from "axios";

import Search from "../components/Search";
import Card from "../components/Card";

const Offers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api-final.herokuapp.com/offer/with-count"
    );
    // console.log(response.data);

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Search setData={setData} />
      {isLoading ? (
        <div>Loading...</div>
      ) : data.offers.length > 0 ? (
        <div style={{ marginTop: "200px" }}>
          {data.offers.map((offer, index) => {
            return <Card key={offer._id} offer={offer} />;
          })}
        </div>
      ) : (
        <div>Aucune offre pour le moment</div>
      )}
      ;
    </div>
  );
};

export default Offers;
