import React, { useState, useEffect } from "react";
import MainItems from "./components/MainItems";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Pagination from "./components/Pagination";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  /***************************************/

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
  // /***************************************/

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);
  // /***************************************/

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

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  /***************************************/

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <MainItems records={records} onError={error} />
      <Pagination
        onPrevPage={prevPage}
        onNextPage={nextPage}
        onChangePage={changePage}
        numbers={numbers}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
}

export default App;
