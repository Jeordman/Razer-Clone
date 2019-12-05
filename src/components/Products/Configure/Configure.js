import React, { useState, useEffect } from "react";

import axios from "axios";

const Configure = props => {
  useEffect(() => {
    console.log(props.match.params)
    axios
      .get(`/api/Laptops/${props.match.params.productName}`)
      .then(product => console.log(product.data));
  }, []);

  const readableCaser = (str) => {
    const strArr = str.split('-')
    return strArr.map((e) => e[0].toUpperCase()).join(' ')
  }

  let writeMe = readableCaser(props.match.params.productName)

  return (
    <div>{`this is configure (the component ${writeMe})`}</div>
  );
};

export default Configure;
