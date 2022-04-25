import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word} value`);
  }

  function handleWordChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleWordChange} />
        <input type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
