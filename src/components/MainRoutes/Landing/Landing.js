import React from "react";
import ReactPlayer from "react-player";
import "./Landing.css";
const S3_LOCATION = require("../../../Config");

export default function Landing() {
  return (
    <section>
      <section
        className="landing-image-stealth-ad"
        style={{
          backgroundImage: `url(${S3_LOCATION}/Landing/blade-stealth-ifa.jpg`
        }}
      >
        <article className="landing-image-stealth-ad-text">
          <h1 id="first-gaming-ultrabook">
            The World's First Gaming Ultrabook
          </h1>
          <button className="razer-button">Shop Now ></button>
        </article>
      </section>

      <section
        className="landing-image-keyboard-ad"
        style={{
          backgroundImage: `url(${S3_LOCATION}/Landing/razer-hunstman-elite.jpg`
        }}
      >
        <article className="landing-image-keyboard-ad-text">
          <h1 id="first-gaming-ultrabook">
            Now available with the Razer Linear Optical Switch
          </h1>
        </article>
      </section>

      <section className="landing-image-mouse-ad">
        <ReactPlayer
          url={`${S3_LOCATION}/Landing/Death+Stranding+-+Official+Cinematic+Trailer.mp4`}
          playing
          muted
          loop="true"
          width="100%"
          height="99.8%"
        />
        {/* <article className="landing-image-mouse-ad-text">
          <h1 id="first-gaming-ultrabook">Absolute control</h1>
        </article> */}
      </section>

      <article>
        <section className="left-ad-homepage">
          <p className="mini-homepage-ads">
            Exclusive Savings, This Season Only
          </p>
          <button className="razer-button">Shop Razer Blade 15 Today</button>
        </section>

        <section className="right-ad-homepage">
          <p className="mini-homepage-ads">The Meow Factor!</p>
          <button className="razer-button">Take me to the store</button>
        </section>
        <img
          className="landing-image-2"
          src={`${S3_LOCATION}/Landing/razer-blade-pro-15.jpg`}
        />
        <img
          className="landing-image-2"
          src={`${S3_LOCATION}/Landing/krakken-kitty.jpg`}
        />
      </article>
      <article>
        <section className="left-ad-homepage">
          <p className="mini-homepage-ads">
            Exclusive Savings, This Season Only
          </p>
          <button className="razer-button">Shop Razer Blade 15 Today</button>
        </section>

        <section className="right-ad-homepage">
          <p className="mini-homepage-ads">The Meow Factor!</p>
          <button className="razer-button">Take me to the store</button>
        </section>
        <img
          className="landing-image-2"
          src={`${S3_LOCATION}/Landing/razer-phone-case.jpg`}
        />
        <img
          className="landing-image-2"
          src={`${S3_LOCATION}/Landing/razer-pink.jpg`}
        />
      </article>
      <article>
        <section className="left-ad-homepage">
          <p className="mini-homepage-ads">
            Exclusive Savings, This Season Only
          </p>
          <button className="razer-button">Shop Razer Blade 15 Today</button>
        </section>

        <section className="right-ad-homepage">
          <p className="mini-homepage-ads">The Meow Factor!</p>
          <button className="razer-button">Take me to the store</button>
        </section>
        <img
          className="landing-image-2"
          src={`${S3_LOCATION}/Landing/respawn-drinks.jpg`}
        />
        <img
          className="landing-image-2"
          src={`${S3_LOCATION}/Landing/razer-esports.jpg`}
        />
      </article>
    </section>
  );
}
