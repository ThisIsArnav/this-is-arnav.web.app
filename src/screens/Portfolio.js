import React from "react";
import "../App.css";

export default function Portfolio() {
  return (
    <div className="App-header">
      <a
        className="App-link"
        href="https://this-is-arnav.web.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"
          style={{ width: 50, height: 50 }}
        />
        Website: this-is-arnav.web.app
      </a>
      <a
        className="App-link"
        href="https://www.youtube.com/channel/UCCxKLrv31g8Z3z1kKtsKkpw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
          style={{ width: 50, height: 50 }}
        />
        YouTube Channel: Brilliant Bytes
      </a>
      <a
        className="App-link"
        href="https://agrosys.in/apps"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.xda-developers.com/files/2018/01/Google-Play-Store-Feature-Image-Background-Colour-1024x683.png"
          style={{ width: 50, height: 50 }}
        />
        App: Ground Reality
      </a>
    </div>
  );
}
