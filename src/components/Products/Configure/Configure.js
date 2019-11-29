import React, { useState, useEffect } from "react";

import axios from "axios";

const Configure = props => {
  useEffect(() => {
    axios
      .get(`/api/products/${props.match.params.productName}`)
      .then(product => console.log(product.data));
  }, []);

  return (
    <div>{`this is configure (the component ${props.match.params.productName})`}</div>
  );
};

export default Configure;
