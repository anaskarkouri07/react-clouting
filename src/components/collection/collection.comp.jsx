import React from "react";
import "./collection.style.scss";
import { Link } from "react-router-dom";
import CollectionItem from "../ItemCollection/item-collection.comp";

const Collection = ({ title, routeName, items }) => (
  <section className="collections">
    <h2>
      <Link className="collections-link" to={`shop/${routeName}`}>
        {title}
      </Link>
    </h2>
    <div className="collections-items">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...item }) => (
          <CollectionItem key={id} {...item} />
        ))}
    </div>
  </section>
);

export default Collection;
