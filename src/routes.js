import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/MainRoutes/Landing/Landing";
import LaptopsStore from "./components/Products/Store/Store";
import CortexSoftware from "./components/MainRoutes/CortexSoftware/CortexSoftware";
import Cart from "./Test/Cart";

//! under construction
import BladeStealth from "./components/Products/BladeStealth/BladeStealth";
import Blade15 from "./components/Products/Blade15/Blade15";
import Blade17 from "./components/Products/Blade17/Blade17";
import Configure from "./components/Products/Configure/Configure";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/gaming-laptops" component={LaptopsStore} />
    <Route exact path="/cortex" component={CortexSoftware} />
    <Route exact path="/cart" component={Cart} />
    <Route
      exact
      path="/gaming-laptops/blade-stealth"
      component={BladeStealth}
    />
    <Route exact path="/gaming-laptops/blade-15" component={Blade15} />
    <Route exact path="/gaming-laptops/blade-17" component={Blade17} />
    <Route
      path="/gaming-laptops/configure/:productName"
      component={Configure}
    />
  </Switch>
);
