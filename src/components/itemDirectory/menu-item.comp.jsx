import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ imageUrl, title, size }) => {
  console.log(size);

  return (
    <article className={`item ${size}`}>
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="item-content">
        <span>{title}</span>
        <span>Shop Now</span>
      </div>
    </article>
  );
};

export default MenuItem;
