import { useState } from "react";

import { list } from "./assets/Cards-Description.js"; // Keep only one list imported
import Multiple_Cards from "./components/Cards/card.js";
import NavLogo from "./components/NavBar_Logos/NavLogo.js";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  // Since we have a single list now, we can use it directly
  return (
    <div className="App">
      <Header/>
      <NavLogo
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Multiple_Cards list={list} /> {/* Use the single list here */}
      <Footer/>
    </div>
  );
}

export default App;
