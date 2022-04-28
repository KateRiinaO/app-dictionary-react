import React from "react";
export default function PhoneticAudio(props) {
  console.log(props);
  if (props.phonetic.audio) {
    return (
      <div className="PhoneticAudio">
        <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
          listen
        </a>
      </div>
    );
  }
}
