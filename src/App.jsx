import { useState } from "react";
import AddItem from "./AddItem.jsx";
import "./App.css";

const productsDefault = [
  {
    name: "Wireless Mouse",
    description: "A high-precision wireless mouse with ergonomic design.",
    price: 29.99,
    liked: false,
  },
  {
    name: "Mechanical Keyboard",
    description: "A durable mechanical keyboard with customizable RGB lighting.",
    price: 79.99,
    liked: false,
  },
  {
    name: "USB-C Hub",
    description: "A versatile USB-C hub with multiple ports for all your connectivity needs.",
    price: 39.99,
    liked: false,
  },
];

function App() {
  const [products, setProducts] = useState(productsDefault);

  function handleDeleteClick(event, product) {
    setProducts(products.filter((item) => item !== product));
  }

  function handleLikeClick(event, product) {
    setProducts(
      products.map((item) => {
        if (item == product) {
          item.liked = !item.liked;
        }
        return item;
      })
    );
  }

  const productElements = products.map((product, index) => {
    return (
      <>
        <li className="content__product" key={product.name}>
          <h2 className="product__title">
            {product.liked ? "❤️" : ""}
            {product.name}
          </h2>
          <p className="product__description">{product.description}</p>
          <p className="product__price">${product.price}</p>
          <button
            className="product__delete"
            onClick={(event) => handleDeleteClick(event, product)}>
            Delete
          </button>
          <button className="product__like" onClick={(event) => handleLikeClick(event, product)}>
            {product.liked ? "Unlike" : "Like"}
          </button>
        </li>
        {index == products.length - 1 ? false : <li className="content__product-divider"></li>}
      </>
    );
  });

  return (
    <main className="main">
      <AddItem products={products} onAddItem={(items) => setProducts(items)} />
      <section className="content">
        <ol className="content__list">{productElements}</ol>
      </section>
    </main>
  );
}

export default App;
