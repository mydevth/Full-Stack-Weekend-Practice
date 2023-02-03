import React from "react";
import { CATEGORIES } from "../DataSource/Category";
import supabase from "../supabase";

const Fact = ({ fact, setFacts }) => {
  async function handleVote() {
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ votesInteresting: fact.votesInteresting + 1 })
      .eq("id", fact.id)
      .select();

    console.log(updatedFact);
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
      );
  }
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button onClick={handleVote}> 👍 {fact.votesInteresting}</button>
        <button> 🤯{fact.votesMindblowing}</button>
        <button> ⛔️{fact.votesFalse}</button>
      </div>
    </li>
  );
};

export default Fact;
