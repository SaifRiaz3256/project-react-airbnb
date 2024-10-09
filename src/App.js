import { useState } from "react";
import "./App.css";


import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;
