import "./AddItem.css";
import { useState } from "react";

export default function AddItem({ onAddItem, products }) {
  const [isItemAdding, setItemAdding] = useState(false);
  function handleClick() {
    setItemAdding(true);
  }
  return (
    <>
      <nav className="nav">
        <button className="nav__addItemButton" onClick={handleClick}>
          Add item
        </button>
      </nav>
      {isItemAdding ? (
        <AddItemElement setItemAdding={setItemAdding} onAddItem={onAddItem} products={products} />
      ) : (
        false
      )}
    </>
  );
}

function AddItemElement({ setItemAdding, onAddItem, products }) {
  let newProduct = { name: "", description: "", price: 0 };

  function handleCloseClick(event) {
    if (event.currentTarget != event.target) return;
    setItemAdding(false);
  }

  function handleSubmitClick() {
    onAddItem([...products, newProduct]);
    setItemAdding(false);
  }

  function handleInput(event, action) {
    newProduct[action] = event.target.value;
  }

  return (
    <div className="addItemElement-background" onClick={handleCloseClick}>
      <div className="addItemElement">
        <input
          className="addItem__name"
          placeholder="Enter the name of the product"
          onChange={(event) => handleInput(event, "name")}
        />
        <textarea
          className="addItem__description"
          placeholder="Enter the description of the product"
          onChange={(event) => handleInput(event, "description")}
        />
        <input
          className="addItem__price"
          placeholder="Enter the price of the product"
          onChange={(event) => handleInput(event, "price")}
        />
        <button onClick={handleSubmitClick} className="addItem__submit">
          Add Item
        </button>
      </div>
    </div>
  );
}
