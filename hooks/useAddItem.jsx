import { useState, useContext } from "react";
import { ProductsContext } from "../src/ProductsContext";

export default function useAddItem(setItemAdding) {
  const { products, setProducts, productsProperties, setProductsProperties } =
    useContext(ProductsContext);
  const newProductId = products.length;
  const [newProduct, setNewProduct] = useState({
    id: newProductId,
    name: "",
    description: "",
    price: 0,
  });

  function handleInputChange(event, field) {
    setNewProduct({ ...newProduct, [field]: event.target.value });
  }

  function handleCloseClick(event) {
    if (event.currentTarget != event.target) return;
    setItemAdding(false);
  }

  function handleSubmitClick() {
    setProducts([...products, newProduct]);
    setProductsProperties({ ...productsProperties, [newProductId]: { liked: false } });
    setItemAdding(false);
  }

  return { handleInputChange, handleCloseClick, handleSubmitClick };
}
