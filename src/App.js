import "./style.css";
import Header from "./Components/Header";
import NewFactForm from "./Components/NewFactForm";
import CategoryFilter from "./Components/CategoryFilter";
import FactList from "./Components/FactList";
import { useState } from "react";
import { initialFacts } from "./DataSource/InitialFacts";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default App;
