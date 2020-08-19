import React from "react";
import CardItem from "./CardItem";
export default function CardList({ data }) {
  return (
    <div className="card-box row">
      {data.map((item, index) => {
        return (
          <CardItem
            title={item.title}
            description={item.description}
            imageURL={item.imageURL}
          />
        );
      })}
    </div>
  );
}
