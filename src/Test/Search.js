import React, { useState, useEffect } from "react";
import useCustom from "./GlobalState";
const Search = () => {
  const [globalState, setGlobalState] = useCustom([]);
  const [input, setInput] = useState("");

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} />
      {globalState.inventory
        .filter(e => e.name.toLowerCase().includes(input.toLowerCase()))
        .map(e => (
          <div>{e.name}</div>
        ))}
    </div>
  );
};

export default Search;
