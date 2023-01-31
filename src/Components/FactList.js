import React from "react";
import Fact from "./Fact";
import { initialFacts } from "../DataSource/InitialFacts";

const FactList = () => {
  const facts = initialFacts;

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
