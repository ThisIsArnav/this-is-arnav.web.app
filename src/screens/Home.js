import React from "react";
import logo from "../logo.svg";
import "../styles/HomeStyles.css";

export default function Home() {
  return (
    <div className="HomeContainer">
      <div style={{ paddingTop: 50 }} />
      <img
        src="/images/me1.png"
        style={{ height: 50, width: 50, cx: "420.9", cy: "296.5" }}
      />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello Everyone my name is Arnav, <br></br>I am a programmer and I
        develop Apps and Websites. <br></br>My interest's are programming,
        entrepreneurship, video editing and opening start ups, and I like
        science kind of stuff...<br></br> <br></br>Technical Skills :- <br></br>
        Mobile Application Development Skills :- <br></br>React Native, Expo,
        Android Studio <br></br>Designing Software : <br></br>Adobe Photoshop,
        Adobe Premiere Pro, Adobe After Effects and Adobe Audition <br></br>Game
        Dev:- <br></br>Unity, C# If you have a project I can help with, please
        get in touch.
      </p>
      <div style={{ paddingBottom: 30 }} />
      <p>Get in touch:</p>
      <a
        className="App-link"
        href="mailto:protanushsingh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </a>
      <a
        className="App-link"
        href="https://www.youtube.com/channel/UCCxKLrv31g8Z3z1kKtsKkpw"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>
      <a
        className="App-link"
        href="https://www.linkedin.com/in/thisisarnav/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="App-link"
        href="https://twitter.com/UserArnavSingh"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        className="App-link"
        href="https://github.com/ThisIsArnav"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
