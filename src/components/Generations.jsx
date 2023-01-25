import React from "react";
import { Link } from "react-router-dom";
import { G1, G2, G3, G4, G5 } from "../index";

const Generations = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <Link to="/">
        <img
          src={G1}
          alt="Generation 1"
          className="h-auto   rounded-full cursor-pointer hover:scale-125 transition ease-in-out"
        />
      </Link>
      <Link to="/gen2">
        <img
          src={G2}
          alt="Generation 1"
          className="h-auto   rounded-full hover:scale-125 transition ease-in-out cursor-pointer"
        />
      </Link>
      <Link to="/gen3">
        <img
          src={G3}
          alt="Generation 1"
          className="h-auto  rounded-full hover:scale-125 transition ease-in-out cursor-pointer"
        />
      </Link>
      <Link to="/gen4">
        <img
          src={G4}
          alt="Generation 1"
          className="h-auto  rounded-full hover:scale-125 transition ease-in-out cursor-pointer"
        />
      </Link>
      <Link to="/gen5">
        <img
          src={G5}
          alt="Generation 1"
          className="h-auto  rounded-full hover:scale-125 transition ease-in-out cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Generations;
