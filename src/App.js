import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faPlusSquare,
  faUser,
  faBell,
  faEye,
  faClock
} from "@fortawesome/free-regular-svg-icons";
library.add(
  faSearch,
  faPlusSquare,
  faUser,
  faShoppingCart,
  faBell,
  faEye,
  faClock
);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [username, setUsername] = useState(Cookies.get("username") || "");

  const onLogin = (token, username) => {
    setToken(token);
    setUsername(username);
    Cookies.set("token", token);
    Cookies.set("username", username);
  };

  return (
    <Router className="App">
      <Header setToken={setToken} token={token} username={username} />
      <Switch>
        <Route exact path="/">
          <Offers />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/log_in/">
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/sign_up/">
          <SignUp onLogin={onLogin} />
        </Route>
        <Route path="/publish/">
          <Publish />
        </Route>
        <Route path="/payment/">
          <Payment username={username} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
