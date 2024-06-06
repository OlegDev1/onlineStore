import { useContext } from "react";
import { ProductsContext } from "../src/ProductsContext";
import { ProductPropertiesContext } from "../src/ProductsPropertiesContext";

export default function useItems(isCart) {
  const [products, setProducts] = useContext(ProductsContext);
  const [productsProperties, setProductsProperties] = useContext(ProductPropertiesContext);

  function handleDeleteClick(product) {
    setProducts(products.filter((item) => item !== product));
  }

  function handleActionClick(product, property) {
    setProductsProperties({
      ...productsProperties,
      [product.id]: {
        ...productsProperties[product.id],
        [property]: !productsProperties[product.id][property],
      },
    });
  }

  let _products = [...products];
  if (isCart) {
    _products = _products.filter((product) => productsProperties[product.id].cart);
  }

  return { products: _products, productsProperties, handleActionClick, handleDeleteClick };
}
