import React from "react";
import Fact from "./Fact";

const FactList = ({ facts }) => {
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
    </section>
  );
};

export default FactList;
