import React, { useState, useEffect } from "react";
import useCustom from "./GlobalState";
import axios from "axios";
import Map from "./Map";
import "./Cart.css";
import Search from './Search'

const Cart = () => {
  const [globalState, setGlobalState] = useCustom([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("/api/products/cart")
      .then(res => setGlobalState({ cart: res.data }));
      axios
      .get("/api/products/inventory")
      .then(res => setGlobalState({ inventory: res.data }));
  }, []);

  console.log(globalState);
  console.log(input);
  return (
    <section id="cart-main-holder">
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => setGlobalState({ input: input })}>
        ADD TO GlobalState
      </button>
      {globalState.cart.map(e => (
        <Map key={`Cart ${e.cart_id}`} e={e} />
      ))}
      <Search />
    </section>
  );
};

export default Cart;
