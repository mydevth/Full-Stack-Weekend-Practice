import "./style.css";
import Header from "./Components/Header";
import NewFactForm from "./Components/NewFactForm";
import CategoryFilter from "./Components/CategoryFilter";
import FactList from "./Components/FactList";

function App() {
  return (
    <>
      <Header />
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
