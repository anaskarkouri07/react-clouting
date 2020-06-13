import React from "react";
import HomePage from "./pages/homePages/home-page.comp";
import Shop from "./pages/shopPages/shop.comp";
import { Switch, Route } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
