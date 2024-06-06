import "./AddItemElement.css";
import useAddItem from "../hooks/useAddItem";

export default function AddItemElement({ setItemAdding }) {
  const { handleInputChange, handleCloseClick, handleSubmitClick } = useAddItem(setItemAdding);

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
