
import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Header from "./components/MainRoutes/Header/Header.js";
import Footer from "./components/MainRoutes/Footer/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        {routes}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
