import React, { useState } from "react";
import MainItems from "./components/MainItems";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Pagination from "./components/Pagination";
import CartProvider from "./store/CartProvider";
import FilterItems from "./components/FilterItems";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  /***************************************/

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  /***************************************/

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <FilterItems />
      <MainItems />
      <Pagination />
    </CartProvider>
  );
}

export default App;
