import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/img/Vector.png";

import Cookies from "js-cookie";

const Header = ({ token, setToken, username }) => {
  const [searchFocus, setSearchFocus] = useState(false);
  const history = useHistory();
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
          {!token ? (
            <Link
              onFocus={() => setSearchFocus(false)}
              className="Link login"
              to="/log_in"
            >
              <div className="user-offer-button">
                <FontAwesomeIcon className="user-icon" icon={["far", "user"]} />
                Se connecter
              </div>
            </Link>
          ) : (
            <div
              onClick={() => {
                setToken(null);
                Cookies.remove("token");
                Cookies.remove("username");
                history.push("/");
              }}
              onFocus={() => setSearchFocus(false)}
              className="Link login"
            >
              <div className="user-offer-button">
                <p>{username}</p>
                Se déconnecter
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
