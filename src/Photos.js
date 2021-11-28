import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photo) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <section className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={index}
                    className="img-fluid"
                    width={400}
                  ></img>
                </a>
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
