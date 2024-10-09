import { useState } from "react";

import { list, list2 } from "./assets/Cards-Description.js";
import Multiple_Cards from "./components/Cards/card.js";
import NavLogo from "./components/NavBar_Logos/NavLogo.js";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header/>
      <NavLogo
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Multiple_Cards list={list} /> : <Multiple_Cards list={list2} />}
      <Footer/>
    </div>
  );
}

export default App;
