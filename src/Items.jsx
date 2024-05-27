import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import "./Items.css";

export default function Items() {
  const [products, setProducts] = useContext(ProductsContext);

  function handleDeleteClick(product) {
    setProducts(products.filter((item) => item !== product));
  }

  function handleLikeClick(product) {
    setProducts(
      products.map((item) => {
        if (item == product) {
          item.liked = !item.liked;
        }
        return item;
      })
    );
  }

  return (
    <section className="content">
      <ol className="content__list">
        {products.map((product, index) => {
          return (
            <>
              <li className="content__product" key={product.name}>
                <h2 className="product__title">
                  {product.liked ? "❤️" : ""}
                  {product.name}
                </h2>
                <p className="product__description">{product.description}</p>
                <p className="product__price">${product.price}</p>
                <button className="product__delete" onClick={() => handleDeleteClick(product)}>
                  Delete
                </button>
                <button className="product__like" onClick={() => handleLikeClick(product)}>
                  {product.liked ? "Unlike" : "Like"}
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
