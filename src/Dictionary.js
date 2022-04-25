import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary() {
  //needed to "collect data" from the input form
  let [keyword, setKeyword] = useState("");

  //what we get from the api call
  function handleResponse(response) {
    console.log(response);
  }

  //reads inserted in form word, alerts it and makes an api call to get the value(in dictionary) of this word
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} value`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //making the searched word a variable
  function handleKeyordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  //the structure of dictionary
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyordChange} />
        <input type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
