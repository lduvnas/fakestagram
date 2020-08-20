import React from "react";
import LikeButton from "./LikeButton";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardItem({ title, description, imageURL, id }) {
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
          <a className="btn btn-block" onClick={() => setShowDescription(true)}>
            read more
          </a>
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
          <Link to={`/image/${id}`}>Go to Image</Link>
        </div>
      </div>
    </div>
  );
}
