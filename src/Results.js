import React from "react";
import Meanings from "./Meanings";
import PhoneticText from "./PhoneticText";
import PhoneticAudio from "./PhoneticAudio";
import "./Results.css";
export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-uppercase">{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <PhoneticText phonetic={phonetic} />
            </div>
          );
        })}{" "}
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <PhoneticAudio phonetic={phonetic} />
            </div>
          );
        })}
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
    return null;
  }
}
