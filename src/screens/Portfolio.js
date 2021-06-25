import React from "react";

import "../App.css";

import Carousel from "react-elastic-carousel";
import Item from "../components/Card";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Portfolio() {
  function Card(props) {
    return (
      <a href={props.link} target="_blank">
        <Item style={{ borderRadius: 70, resize: "contain" }}>
          <div style={{ position: "absolute" }}>
            <img src={props.image} style={{ width: 50, height: 50 }} />
          </div>
          <div style={{ paddingBottom: 5 }} />
          <div style={{ fontSize: 15, paddingTop: 80 }}>
            <p>{props.text}</p>
          </div>
          <a
            className="App-link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </Item>
      </a>
    );
  }

  return (
    <div className="App">
      <p style={{ fontSize: 30, fontFamily: "sans-serif", fontWeight: "bold" }}>
        Portfolio:
      </p>
      <Carousel breakPoints={breakPoints}>
        <Card
          link="https://www.youtube.com/channel/UCCxKLrv31g8Z3z1kKtsKkpw"
          image="https://image.flaticon.com/icons/png/512/174/174883.png"
          text="YouTube Channel: Brilliant Bytes"
        />
        <Card
          link="https://this-is-arnav.web.app"
          image="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png"
          text="Website: this-is-arnav.web.app"
        />
      </Carousel>
    </div>
  );
}
