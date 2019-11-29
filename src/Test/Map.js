import React from "react";
import axios from "axios";
import useCustom from "./GlobalState";

const Map = ({ e }) => {
  const [globalState, setGlobalState] = useCustom([]);

  const cartRemove = id => {
    axios
      .delete(`/api/products/cart/${id}`)
      .then(res => setGlobalState({ cart: res.data }));
  };

  return (
    <section>
      <>{e.name}</>
      <button onClick={() => cartRemove(e.cart_id)}>Delete</button>
    </section>
  );
};

export default Map;
