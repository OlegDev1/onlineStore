import { useContext, useEffect } from "react";
import { ProductsContext } from "../src/ProductsContext";

export default function useGetItems(page) {
  const { setProducts, setProductsProperties } = useContext(ProductsContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        let products = json
          .map((item) => {
            return {
              id: item.id - 1,
              name: item.title,
              description: item.description,
              price: item.price,
            };
          })
          .slice(page * 5 - 5, page * 5);

        let productsProperties = {};
        for (let item of json.slice(page * 5 - 5, page * 5)) {
          productsProperties[item.id - 1] = { liked: false, cart: false };
        }

        setProducts(products);
        setProductsProperties(productsProperties);
      });
  }, [page]);
}
