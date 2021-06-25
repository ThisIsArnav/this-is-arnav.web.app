import React from "react";

import logo from "../logo.svg";

import "../styles/HomeStyles.css";

import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div className="HomeContainer">
        <div style={{ paddingTop: 50 }} />
        <img
          src="/images/me1.png"
          style={{ height: 50, width: 50, cx: "420.9", cy: "296.5" }}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Everyone my name is Arnav, <br />I am a programmer and I develop
          Apps and Websites. <br />
          My interest's are programming, entrepreneurship, video editing and
          opening start ups, and I like science kind of stuff...
          <br /> <br />
          Technical Skills :- <br />
          Mobile Application Development Skills :- <br />
          React Native, Expo, Android Studio <br />
          Designing Software : <br />
          Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects and Adobe
          Audition <br />
          Game Dev:- <br />
          Unity, C# <br />
          <br />
          If you have a project I can help with, please get in touch.
        </p>
      </div>
      <div style={{ paddingTop: 20 }} />
      <Portfolio />
      <Contact />
    </>
  );
}
