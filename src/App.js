import Data from "./Data.js";
import Card from "./Card.js";
import { useState } from "react";
import Buttons from "./Buttons.js";
import "./App.css";

function App() {
  const [item, setItem] = useState(Data);
  const menuItem = [...new Set(Data.map((val) => val.category))];
  const filterItem = (curCat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curCat;
    });
    setItem(newItem);
  };

  return (
    <div className="container">
      <div>
        <div className="body-container">
          <h1>Our Menu</h1>
          <Buttons
            setItem={setItem}
            menuItem={menuItem}
            filterItem={filterItem}
          />
          <Card item={item} />
        </div>
      </div>
    </div>
  );
}

export default App;
