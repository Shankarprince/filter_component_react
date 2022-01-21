import Data from "./Data.js";

function Buttons({ menuItem, setItem, filterItem }) {
  return (
    <div className="nav-container">
      {menuItem.map((val, id) => {
        return (
          <div key={id}>
            <button className="button" onClick={() => filterItem(val)}>
              {val}
            </button>
          </div>
        );
      })}
      <button className="button" onClick={() => setItem(Data)}>All</button>
    </div>
  );
}

export default Buttons;
