import React from "react";
import ReactPlayer from "react-player";
import "./CortexSoftware.css";
const S3_LOCATION = require("../../../Config");

export default function CortexSoftware() {
  return (
    <section className="cortex-full-holder">
      <header>RAZER CORTEX</header>
      <section className="darken-screen">
        <section className="razer-core-text">
          <div className="cortex-logo">
            <img src="//assets.razerzone.com/eeimages/cortex/v4/rzr-cortex-logo.svg" />
          </div>
          <section id="razer-core-main-description">
            <article id="focus-on-game">FOCUS ONLY ON THE GAME</article>
            <p id="razer-core-p">
              Razer Cortex brings enhanced gaming performance, system
              performance, and the ability to discover the best gaming deals on
              a single platform at just a click away.
            </p>
          </section>

          <button id="download-core-button">DOWNLOAD NOW</button>
        </section>
        >
      </section>
      <section className="titanfall-2-video">
        <ReactPlayer
          url={`${S3_LOCATION}/CortexSoftware/titanfallvideo.mp4`}
          playing="true"
          loop="true"
          muted="true"
          width="100vw"
          height="100%"
        />
      </section>
      <section
        className="cortex-image1"
        style={{
          backgroundImage: `url(${S3_LOCATION}/CortexSoftware/cortex-game-booster-desktop.jpg`
        }}
      >
        <article id="cortex-article">
          <article id="cortex-title">RAZER CORTEX: GAME BOOSTER</article>
          <p id="cortex-p">
            With Razer Cortex: Game Booster, unlock your system’s full potential
            with a variety of performance enhancing and optimization tools for
            higher frames per second, or cut down on draggy load times. Whether
            you choose automated mode or to manually tweak it yourself, your
            PC’s full gaming potential is now at your fingertips.
          </p>
          <button id="cortex-button">LEARN MORE</button>
        </article>
      </section>
      <section
        className="cortex-image2"
        style={{
          backgroundImage: `url(${S3_LOCATION}/CortexSoftware/cortex_usp_2_background.jpg`
        }}
      >
        <article id="cortex-article2">
          <article id="cortex-title2">RAZER CORTEX: SYSTEM BOOSTER</article>
          <p id="cortex-p2">
            Razer Cortex doesn’t merely boost your games, it boosts your entire
            system. The new Razer Cortex: System Booster is a one-stop solution
            for better system performance. By cleaning unwanted junk files, not
            a single kilobyte of hard disk space is wasted, leaving you more for
            work and play. With such optimization, your PC isn’t just primed for
            gaming, it’s also perfect for daily use.
          </p>
          <button id="cortex-button">LEARN MORE</button>
        </article>
      </section>
      <section
        className="cortex-image3"
        style={{
          backgroundImage: `url(${S3_LOCATION}/CortexSoftware/cortex-game-deals-desktop.jpg`
        }}
      >
        <article id="cortex-article3">
          <article id="cortex-title3">RAZER GAME DEALS</article>
          <p id="cortex-p3">
            Get more bang for your buck with the Razer Game Deals price
            comparison engine and giveaways. With the latest updates on price
            drops from all the top digital game stores, never let a game deal
            pass you by. Razer Game Deals delivers the best prices from around
            the globe right to your desktop. If you’re lucky enough, you might
            just find yourself getting games or even Razer hardware for free,
            via our new giveaways. Be sure to stay alert so you don’t miss out!
          </p>
          <button id="cortex-button">LEARN MORE</button>
        </article>
      </section>
      <section
        className="cortex-image4"
        style={{
          backgroundImage: `url(${S3_LOCATION}/CortexSoftware/cortexmobile-pgupdate-desktop.jpg`
        }}
      >
        <article id="cortex-article2">
          <article id="cortex-title2">RAZER CORTEX - NOW ON MOBILE</article>
          <p id="cortex-p4">
            The Razer Cortex Mobile app lets you discover new and popular mobile
            games, and utilize the Game Booster for game and device
            optimization. With Paid to Play, you can earn Razer Silver just by
            launching games and playing via the app.
          </p>
          <button id="cortex-button">LEARN MORE</button>
        </article>
      </section>
      <section
        className="cortex-image5"
        style={{
          backgroundImage: `url(${S3_LOCATION}/CortexSoftware/cortexpc-pgupdate-mobile-cortexmobilepanel-desktop.jpg`
        }}
      >
        <article id="cortex-article3">
          <article id="cortex-title3">PAID TO PLAY</article>
          <p id="cortex-p3">
            The rewards program you love is back! Launch your game from Razer
            Cortex on your PC and earn Silver while gaming with Paid to Play,
            our fan favorite program. Redeem your Razer Silver for a variety of
            exciting rewards, including Razer gear, games and more.
          </p>
          <button id="cortex-button">LEARN MORE</button>
        </article>
      </section>
    </section>
  );
}
