import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ imageUrl, title, size, linkUrl, history, match }) => {
  console.log(size);

  return (
    <article
      className={`item ${size}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}>
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

export default withRouter(MenuItem);
