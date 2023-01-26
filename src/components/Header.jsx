import React from "react";
import { Searcher, Generations } from "../index";
import { Col } from "antd";
import { VidLogo } from "../index";
import '../assets/styles/Headcss.css'
import "../App.css";

const Header = () => {
  return (
    <div>
      <section className="showcase">
        <video src={VidLogo} autoPlay loop muted></video>
        <h1 className="title dark:bg-black dark:text-white dark:mix-blend-multiply">POKEDEX</h1>
      </section>
      <Col span={8} offset={8}>
        <Searcher />
        <Generations />
      </Col>
    </div>
  );
};

export default Header;
