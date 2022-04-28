import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary(props) {
  //needed to "collect data" from the input form
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  //needed to send results to the Results component
  let [results, setResults] = useState(null);

  let [loaded, setLoaded] = useState(false);

  //what we get from the api call
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  //https://dictionaryapi.dev/
  //reads inserted in form word and makes an api call to get the value(in dictionary) of this word
  function search(event) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  //making the searched word a variable
  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  //the structure of dictionary
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={search}>
          {" "}
          <div className="col">
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              className="form-control"
            />
          </div>
        </form>
        <div className="hint">
          <small>suggested words: summer, kid, happiness ...</small>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading ...";
  }
}
