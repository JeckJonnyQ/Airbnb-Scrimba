import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";

import Data from "./helpers/staticData";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="airbnb">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
