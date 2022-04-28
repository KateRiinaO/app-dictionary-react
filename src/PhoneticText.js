import React from "react";
export default function PhoneticText(props) {
  console.log(props);
  return <div className="PhoneticText">{props.phonetic.text}</div>;
}
