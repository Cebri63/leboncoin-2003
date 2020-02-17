import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Search = ({ setData }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://leboncoin-api-final.herokuapp.com/offer/with-count?title=${searchInput}`
    );
    setData(response.data);
  };

  return (
    <div className="search-container">
      <div className="elipsis-container">
        <div />
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <input
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Que recherchez-vous ?"
              type="text"
            />
            <FontAwesomeIcon
              className="form-search-icon"
              icon="search"
              size="1x"
            />
          </div>

          <input type="submit" value="Rechercher" name="search" />
        </form>
      </div>
    </div>
  );
};

export default Search;
