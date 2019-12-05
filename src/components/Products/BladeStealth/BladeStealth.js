import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BladeStealth.css";
const S3_LOCATION = require("../../../Config");

const BladeStealth = () => {
  return (
    <div className="ras">
      <nav>
        <h1>The New Razer Blade Stealth 13</h1>

        <h1>From US$1,099.99</h1>
        <Link to="/gaming-laptops/configure/razer-blade-stealth">
          <button>Buy Now</button>
        </Link>
      </nav>
      <img
        src={`${S3_LOCATION}/StoreMain/blade-stealth-13/stealth-red-cod.jfif`}
      />
      <img
        src={`${S3_LOCATION}/StoreMain/blade-stealth-13/stealth-blue-cod.jfif`}
      />
      <img
        src={`${S3_LOCATION}/StoreMain/blade-stealth-13/stealth-light-carry.jpg`}
      />
      <img
        src={`${S3_LOCATION}/StoreMain/blade-stealth-13/stealth-blue-keys.jpg`}
      />
    </div>
  );
};

export default BladeStealth;
