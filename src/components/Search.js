import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="search-container">
      <div className="elipsis-container">
        <div />
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <input placeholder="Que recherchez-vous ?" type="text" />
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
