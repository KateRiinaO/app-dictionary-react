import React from "react";
import Meanings from "./Meanings";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-uppercase">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="emptyObject">
        <p>What word are you looking for? Enter above!</p>
      </div>
    );
  }
}
