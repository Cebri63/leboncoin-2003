import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faShoppingCart,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
library.add(faSearch, faPlusSquare, faUser, faShoppingCart);

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Offers />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
