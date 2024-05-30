import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import { ProductPropertiesContext } from "./ProductsPropertiesContext";
import "./Items.css";

export default function Items({ isCart }) {
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

  let Products = [...products];
  if (isCart) {
    Products = Products.filter((product) => productsProperties[product.id].cart);
  }
  return (
    <section className="content">
      <ol className="content__list">
        {Products.map((product, index) => {
          return (
            <>
              <li className="content__product" key={product.name}>
                <h2 className="product__title">
                  {(productsProperties[product.id].liked ? "❤️" : "") +
                    product.name +
                    (productsProperties[product.id].cart ? "🛒" : "")}
                </h2>
                <p className="product__description">{product.description}</p>
                <p className="product__price">${product.price}</p>
                <button className="product__delete" onClick={() => handleDeleteClick(product)}>
                  Delete
                </button>
                <button
                  className="product__like"
                  onClick={() => handleActionClick(product, "liked")}>
                  {productsProperties[product.id].like ? "Unlike" : "Like"}
                </button>
                <button
                  className="product__cart"
                  onClick={() => handleActionClick(product, "cart")}>
                  {productsProperties[product.id].cart ? "Out of cart" : "In cart"}
                </button>
              </li>
              {index !== products.length - 1 ? (
                <li className="content__product-divider"></li>
              ) : (
                false
              )}
            </>
          );
        })}
      </ol>
    </section>
  );
}
