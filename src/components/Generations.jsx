import React from "react";
import { G1, G2, G3, G4, G5 } from "../index";

const Generations = () => {
  return (
    <div>
      <div className=" flex gap-4 justify-center items-center">
        <img
          src={G1}
          alt="Generation 1"
          className="h-32 rounded-xl border-b-4"
        />

        <img
          src={G2}
          alt="Generation 1"
          className="h-32 rounded-xl border-b-4 "
        />
        <img
          src={G3}
          alt="Generation 1"
          className="h-32 rounded-xl border-b-4"
        />
        <img
          src={G4}
          alt="Generation 1"
          className="h-32 rounded-xl border-b-4"
        />
        <img
          src={G5}
          alt="Generation 1"
          className="h-32 rounded-xl border-b-4"
        />
      </div>
    </div>
  );
};

export default Generations;
