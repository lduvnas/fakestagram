import React from "react";
import CardItem from "./CardItem";
import { useState, useEffect } from "react";

export default function CardList() {
  let [imageList, setImageList] = useState([]);

  function fetchImageList() {
    fetch("https://image-mock-data.firebaseio.com/images.json")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setImageList(result);
      });
  }

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div className="card-box row">
      {imageList.map((item, index) => {
        return (
          <CardItem
            key={index}
            id={index}
            title={item.title}
            description={item.description}
            imageURL={item.imageURL}
          />
        );
      })}
    </div>
  );
}

/* function renderLikeButton() {
  const message = isLiked ? "Du har gillat" : "Gilla";
  return (
    <button onClick={handleClick} className="btn btn-primary btn-block">
      {message} ({likes})
    </button>
  );
}  */
