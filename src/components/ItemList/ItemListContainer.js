import React from "react";
import ItemList from "./ItemList";

const ItemDetailContainer = ({ beer }) => {
  return (
    <div className="itemListContainer">
      {beer.map((beer) => {
        return <ItemList beer={beer} key={beer.idNumber} />;
      })}
    </div>
  );
};

export default ItemDetailContainer;
