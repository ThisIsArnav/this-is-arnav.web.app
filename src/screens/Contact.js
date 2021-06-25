import React from "react";
import Item from "../components/Card";
import styled from "styled-components";

const Contact = () => {
  function Card(props) {
    return (
      <a href={props.link} target="_blank">
        <Item
          style={{
            borderRadius: 10,
            backgroundColor: "#e6e3a8",
            height: 100,
          }}
        >
          <div>
            <img src={props.image} style={{ width: 50, height: 50 }} />
          </div>
          <div style={{ paddingBottom: 5 }} />
          <div style={{ paddingTop: 5, paddingBottom: 50, paddingLeft: 5 }}>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 20 }}
            >
              {props.text}
            </a>
          </div>
        </Item>
      </a>
    );
  }

  return (
    <div className="HomeContainer">
      <div style={{ paddingBottom: 30 }} />
      <p>Contact Me:</p>
      <Card
        image="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
        link="mailto:protanushsingh@gmail.com"
        text="Email"
      />
      <div style={{ paddingBottom: 10 }} />
      <Card
        image="https://image.flaticon.com/icons/png/512/174/174883.png"
        link="https://www.youtube.com/channel/UCCxKLrv31g8Z3z1kKtsKkpw"
        text="YouTube"
      />
      <div style={{ paddingBottom: 10 }} />
      <Card
        image="https://image.flaticon.com/icons/png/512/174/174857.png"
        link="https://www.linkedin.com/in/thisisarnav/"
        text="LinkedIn"
      />
      <div style={{ paddingBottom: 10 }} />
      <Card
        image="https://image.flaticon.com/icons/png/512/124/124021.png"
        link="https://twitter.com/UserArnavSingh"
        text="Twitter"
      />
      <div style={{ paddingBottom: 10 }} />
      <Card
        image="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"
        link="https://github.com/ThisIsArnav"
        text="GitHub"
      />
      <div style={{ paddingBottom: 10, paddingRight: 5 }} />
      <Card
        image="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png"
        link="https://discord.com/invite/xXnKRWP7PK"
        text="Join our group (Discord Server)"
      />
      <div style={{ paddingBottom: 10 }} />
    </div>
  );
};

export default Contact;

const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
