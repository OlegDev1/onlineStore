import "./AddItemElement.css";
import { useState, useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export default function AddItemElement({ setItemAdding }) {
  const [products, setProducts] = useContext(ProductsContext);
  let [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0, liked: false });

  function handleCloseClick(event) {
    if (event.currentTarget != event.target) return;
    setItemAdding(false);
  }

  function handleSubmitClick() {
    setProducts([...products, newProduct]);
    setItemAdding(false);
  }

  function handleInputChange(event, field) {
    setNewProduct({ ...newProduct, [field]: event.target.value });
  }

  return (
    <div className="addItemElement-background" onClick={handleCloseClick}>
      <div className="addItemElement">
        <input
          className="addItem__name"
          placeholder="Enter the name of the product"
          onChange={(event) => handleInputChange(event, "name")}
        />
        <textarea
          className="addItem__description"
          placeholder="Enter the description of the product"
          onChange={(event) => handleInputChange(event, "description")}
        />
        <input
          className="addItem__price"
          placeholder="Enter the price of the product"
          onChange={(event) => handleInputChange(event, "price")}
        />
        <button onClick={handleSubmitClick} className="addItem__submit">
          Add Item
        </button>
      </div>
    </div>
  );
}
