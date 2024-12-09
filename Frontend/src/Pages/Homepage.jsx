

import Footer from "../components/Footer/Footer.js";

import { list } from "../assets/Cards-Description.js"; // Keep only one list imported
import Multiple_Cards from "../components/Cards/card.js";
import SearchBar from "../Components/SearchBar";


const Home = () => {
  return (
    <div>
     
      <SearchBar />
      
      
      <Multiple_Cards list={list} />
      <Footer/>
    </div>
  );
};

export default Home;
