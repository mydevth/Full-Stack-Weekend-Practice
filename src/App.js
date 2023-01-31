import "./style.css";
import Header from "./Components/Header";
import NewFactForm from "./Components/NewFactForm";
import CategoryFilter from "./Components/CategoryFilter";
import FactList from "./Components/FactList";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
