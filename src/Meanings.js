import React from "react";
import "./Meanings.css";
export default function Meanings(props) {
  return (
    <div className="Meaning">
      <p>PART OF SPEECH: {props.meaning.partOfSpeech}</p>
      <p>DEFINITION: {props.meaning.definitions[0].definition}</p>
      <p>EXAMPLE: {props.meaning.definitions[0].example}</p>
    </div>
  );
}
