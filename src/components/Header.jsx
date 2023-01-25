import React from "react";
import { Searcher, Generations } from "../index";
import { Col } from "antd";
import logo from "../assets/static/logo.svg";
import "../App.css";

const Header = () => {
  return (
    <div>
      <Col span={4} offset={10}>
        {" "}
        <img src={logo} alt="Pokedux" className="pb-4" />{" "}
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
        <Generations />
      </Col>
    </div>
  );
};

export default Header;
