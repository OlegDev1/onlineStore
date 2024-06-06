import "./Items.css";
import { useNavigate } from "react-router-dom";
import useItems from "../hooks/useItems";

export default function Items({ isCart }) {
  const navigate = useNavigate();
  const { products, productsProperties, handleActionClick, handleDeleteClick } = useItems(isCart);

  return (
    <section className="content">
      <ol className="content__list">
        {products.map((product, index) => {
          const productIsLiked = productsProperties[product.id].liked;
          const prodictIsInCart = productsProperties[product.id].cart;

          return (
            <>
              <li className="content__product" key={product.name}>
                <h2 className="product__title" onClick={() => navigate(`/product/${product.id}`)}>
                  {(productIsLiked ? "❤️" : "") + product.name + (prodictIsInCart ? "🛒" : "")}
                </h2>
                <p className="product__description">{product.description}</p>
                <p className="product__price">${product.price}</p>
                <div className="product__buttons">
                  <button className="product__delete" onClick={() => handleDeleteClick(product)}>
                    Delete
                  </button>
                  <button
                    className="product__like"
                    onClick={() => handleActionClick(product, "liked")}>
                    {productIsLiked ? "Unlike" : "Like"}
                  </button>
                  <button
                    className="product__cart"
                    onClick={() => handleActionClick(product, "cart")}>
                    {prodictIsInCart ? "Out of cart" : "In cart"}
                  </button>
                </div>
              </li>
              {index !== products.length - 1 ? (
                <li className="content__product-divider"></li>
              ) : null}
            </>
          );
        })}
      </ol>
    </section>
  );
}
