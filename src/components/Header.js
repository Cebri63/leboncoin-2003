import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/img/Vector.png";

const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  return (
    <nav>
      <ul>
        <div className="header-left">
          <li>
            <Link onFocus={() => setSearchFocus(false)} className="Link" to="/">
              <img alt="Logo" src={Logo} />
            </Link>
          </li>
          <li>
            <Link
              onFocus={() => setSearchFocus(false)}
              className="Link"
              to="/publish"
            >
              <div className="publish-offer-button">
                <FontAwesomeIcon icon={["far", "plus-square"]} size="2x" />
                Déposer une annonce
              </div>
            </Link>
          </li>
          <li>
            <Link
              onFocus={() => setSearchFocus(true)}
              className={`Link ${searchFocus ? "search-focus" : "search"}`}
              to="/"
            >
              <div className="search-offer-button">
                <FontAwesomeIcon className="header-search-icon" icon="search" />
                Rechercher
              </div>
            </Link>
          </li>
        </div>
        <li className="header-right">
          <Link
            onFocus={() => setSearchFocus(false)}
            className="Link login"
            to="/login"
          >
            <div className="user-offer-button">
              <FontAwesomeIcon className="user-icon" icon={["far", "user"]} />
              Se connecter
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
