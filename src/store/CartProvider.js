import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  console.log(records);
  const addItemToCartHandler = (item) => {};

  const removeFromCartHandler = (id) => {};

  useEffect(() => {
    const fetchDatasHandler = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDatasHandler();
  }, []);

  /***************************************/

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  /***************************************/
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  /***************************************/

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };
  /***************************************/
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeFromCartHandler,
    onShow: showCartHandler,
    onclose: hideCartHandler,
    prevPage,
    nextPage,
    changePage,
    records,
    error,
    numbers,
    currentPage,
    cartIsShown,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
