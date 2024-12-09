import { list } from "../assets/Cards-Description.js"; // Keep only one list imported
import Multiple_Cards from "../components/Cards/card.js";
const Home = () => {
  return (
    <div>
      <Multiple_Cards list={list} />
    </div>
  );
};

export default Home;
