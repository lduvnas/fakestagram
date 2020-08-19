import React from "react";
import LikeButton from "./LikeButton";
import { useState } from "react";

export default function CardItem({ title, description, imageURL }) {
  let [showDescription, setShowDescription] = useState(false);

  function renderDescription() {
    if (showDescription) {
      return <p className="card-text">{description}</p>;
    } else {
      return "";
    }
  }

  function renderShowMore() {
    if (showDescription === false) {
      return (
        <p>
          <a onClick={() => setShowDescription(true)}>read more</a>
        </p>
      );
    } else {
      return "";
    }
  }

  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img className="card-img-top" src={imageURL} alt={imageURL} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {renderShowMore()}
          {renderDescription()}

          <a className="text-center" href={imageURL}>
            Download image
          </a>
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
