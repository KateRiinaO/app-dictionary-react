import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="row Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-3" key={index}>
              <a href={photo.src.original} rel="noreferrer" target="_blank">
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="word-you-seek"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
