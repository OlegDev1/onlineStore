import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import "./ItemDetails.css";
import { useContext } from "react";

export default function ItemDetails() {
  const [products] = useContext(ProductsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id];

  return (
    <section className="product-content">
      <div className="product-content__title-layout">
        <button className="product-content__homeButton" onClick={() => navigate("/")}>
          {"<"}
        </button>
        <h1 className="product-content__title">{product.name}</h1>
      </div>
      <p className="product-content__description">{product.description}</p>
      <div className="product-content__price">${product.price}</div>
    </section>
  );
}
