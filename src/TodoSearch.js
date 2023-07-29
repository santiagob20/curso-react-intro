import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log("search is: " + searchValue);

  return (
    <input
      placeholder="Escriba la tarea aca"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}

export { TodoSearch };