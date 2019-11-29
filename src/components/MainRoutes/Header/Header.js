import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const S3_LOCATION = require("../../../Config");

export default function Header() {
  return (
    <header id="master-header">
      <Link className="main-link-home" to="/">
        <img
          id="master-razer-logo"
          src={`${S3_LOCATION}/otherRazer/RazerLogo.svg`}
        />
      </Link>

      <nav id="linked-lists">
        <Link to="/gaming-laptops">
          <button id="link">PRODUCTS</button>
        </Link>
        <Link to="/cortex">
          <button id="link">SOFTWARE</button>
        </Link>
        <li>COMMUNITY</li>
      </nav>

      <nav>
        <div id="r">
          <i className="fas fa-search"></i>
        </div>
        <Link to="/cart">
          <div id="r">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </Link>
      </nav>
    </header>
  );
}
