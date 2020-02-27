import React, { useState, useEffect } from "react";

import axios from "axios";

import Search from "../components/Search";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Offers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(
      `https://leboncoin-api-final.herokuapp.com/offer/with-count?skip=${skip}&limit=3`
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

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
      <Pagination count={data.count} skip={skip} setSkip={setSkip} />
    </div>
  );
};

export default Offers;
