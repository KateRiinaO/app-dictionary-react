import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary() {
  //needed to "collect data" from the input form
  let [keyword, setKeyword] = useState("");
  //needed to send results to the Results component
  let [results, setResults] = useState(null);
  //what we get from the api call
  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  //https://dictionaryapi.dev/
  //reads inserted in form word and makes an api call to get the value(in dictionary) of this word
  function search(event) {
    event.preventDefault();
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
        {" "}
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeyordChange}
              className="form-control"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="SEARCH"
              className="btn btn-success w-100"
            />
          </div>
        </div>
      </form>

      <Results results={results} />
    </div>
  );
}
