import React from "react";
import "./shop-collections.style.scss";
import Collection from "../collection/collection.comp";
import SHOP_DATA from "./shop.data";

class ShopCollections extends React.Component {
  constructor() {
    super();
    this.state = {
      collectionsShops: SHOP_DATA,
    };
  }

  render() {
    const { collectionsShops } = this.state;
    return (
      <main className="shop-collections">
        <h1> Collections </h1>
        {collectionsShops.map(({ id, ...collectionsShops }) => (
          <Collection key={id} {...collectionsShops} />
        ))}
      </main>
    );
  }
}

export default ShopCollections;
