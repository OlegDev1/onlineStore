import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import "./ItemDetails.css";
import { useContext, useState } from "react";

export default function ItemDetails() {
  const { products } = useContext(ProductsContext);
  const [reviews, setReviews] = useState({ isFetched: false, data: {} });
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPage = useLocation().state.page;
  const product = products.find((product) => product.id == +id);

  function handleGetReviewsClick() {
    fetch(`https://fakestoreapi.com/products/${+id + 1}`)
      .then((res) => res.json())
      .then((json) => {
        setReviews({
          isFetched: true,
          data: { rate: json.rating.rate, reviewCount: json.rating.count },
        });
      });
  }

  return (
    <section className="product-content">
      <div className="product-content__title-layout">
        <button
          className="product-content__homeButton"
          onClick={() => navigate(`/page/${currentPage}`)}>
          {"<"}
        </button>
        <h1 className="product-content__title">{product.name}</h1>
      </div>
      {reviews.isFetched && (
        <div className="product-content__reviews">
          <p className="reviews rating">⭐️{reviews.data.rate}</p>
          <p className="reviews count">{reviews.data.reviewCount} reviews</p>
        </div>
      )}
      <p className="product-content__description">{product.description}</p>
      <div className="product-content__price">${product.price}</div>
      {reviews.isFetched || (
        <button className="product-content__getReviews" onClick={handleGetReviewsClick}>
          Get the reviews
        </button>
      )}
    </section>
  );
}
