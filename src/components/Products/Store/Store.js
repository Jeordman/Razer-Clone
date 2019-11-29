import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Store.css";
const S3_LOCATION = require("../../../Config");

export default function LaptopsStore() {
  return (
    <section>
      <header className="secondary-header"></header>

      <article id="razer-family-banner">
        <section id="razer-family-box-holder">
          <h1 id="razer-blade-intro-text">Meet the Razer Blade family</h1>
          <section id="blade-line-store">
            <Link
              className="blade-line-boxes"
              id="blade-line-box-stealth"
              to="/gaming-laptops/blade-stealth"
            >
              <img
                src={`${S3_LOCATION}/StoreMain/blade-stealth-13-mainstore.png`}
              />
            </Link>
            <Link
              className="blade-line-boxes"
              id="blade-line-box-15"
              to="/gaming-laptops/blade-15"
            >
              <img
                src={`${S3_LOCATION}/StoreMain/blade-stealth-15-mainstore.png`}
              />
            </Link>
            <Link
              className="blade-line-boxes"
              id="blade-line-box-17"
              to="/gaming-laptops/blade-17"
            >
              <img src={`${S3_LOCATION}/StoreMain/500x500_blade_pro_17.png`} />
            </Link>
          </section>
          <ReactPlayer
            url={`${S3_LOCATION}/StoreMain/Razer+Blade+Stealth+-+Move+with+Power.mp4`}
            playing
            muted
            loop="true"
            muted="true"
            width="100%"
            height="50%"
          />
        </section>
      </article>

      <section
        id="pc-mag-choice-store"
        style={{
          backgroundImage: `url(${S3_LOCATION}/StoreMain/Blade-in-dark.jfif)`
        }}
      >
        <div id="pc-mag-choice-store-box">
          <h1 className="stealth-ad-h1">RAZER BLADE STEALTH 13</h1>
          <p className="stealth-ad-p">
            Move with Power The Razer Blade Stealth 13” laptop is available with
            a more powerful 25W NVIDIA® GeForce® MX150 4GB graphics for gaming
            and content creation. Featuring a visually stunning thin bezel
            display, and Razer Chroma™ keyboard, it combines mobility and style
            with power that’s perfect for work and play.
          </p>
          <button className="razer-button">Learn more ></button>
          <h2 className="stealth-ad-h2">Black Model from $1,399</h2>
          <h2 className="stealth-ad-h2">Quartz Pink Model at $1,599</h2>
        </div>
      </section>

      <article
        id="razer-family-blade-banner"
        style={{
          backgroundImage: `url(${S3_LOCATION}/StoreMain/razer-blade-15-category-desktop-laptop.jpg`
        }}
      >
        <div id="razer-family-blade-box">
          <div id="razer-15-banner-text">RAZER BLADE 15</div>
          <p className="stealth-ad-p">
            The world's smallest 15.6" gaming laptop, the Razer Blade 15, is
            available in two different models - Base and Advanced. Both models
            have options for the latest 9th Gen Intel® Core™ i7 processors and
            NVIDIA® GeForce RTX™ graphics, combined with ample memory and fast
            storage options. Featuring amazing displays ranging from Full HD at
            up to 240Hz to 4K Touch including a cutting-edge OLED option. The
            precision crafted aluminum chassis is compact and durable, while
            remaining as thin as 0.70-inch.
          </p>
          <button className="razer-button">Explore</button>
          <h2 className="stealth-ad-h2">
            *New* Base Model with GeForce GTX from $1,599
          </h2>
          <h2 className="stealth-ad-h2">
            Advanced Model with GeForce RTX from $2,349
          </h2>
        </div>
      </article>

      <section
        id="blade-pro-17-banner"
        style={{
          backgroundImage: `url(${S3_LOCATION}/StoreMain/15-rgb-glow.jpg`
        }}
      >
        <div id="pc-mag-choice-store-box">
          <h1 className="stealth-ad-h1">RAZER BLADE PRO 17</h1>
          <p className="stealth-ad-p">
            The Razer Blade Pro 17 is surpassing new bounds, with a footprint
            nearly 25% smaller than its predecessor and a screen that is even
            faster, gaming on the go is easier than ever. Powered with the
            latest 9th generation Intel® Core™ i7-9750H processor and NVIDIA®
            GeForce RTX™ series graphics the Razer Blade Pro delivers desktop
            gaming performance with the mobility to create wherever inspiration
            strikes.
          </p>
          <button className="razer-button">Learn more ></button>
        </div>
      </section>

      <section>
        <img src={`${S3_LOCATION}/StoreMain/studio-edition-blade.jpg`} />
      </section>
    </section>
  );
}
