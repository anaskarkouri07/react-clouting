import React from "react";
import "./item-collection.style.scss";

const CollectionItem = ({ name, imageUrl, price }) => (
  <article className="item-collection">
    <div className="item-collection-img">
      <img src={imageUrl} alt="" />
      <button>Add Cart</button>
    </div>
    <div className="item-collection-content">
      <span className="item-collection-name">{name}</span>
      <span className="item-collection-price">{price}</span>
    </div>
  </article>
);

export default CollectionItem;
