import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ beer }) => {
  const params = useParams();
  return (
    <div className="itemDetailContainer">
      {beer.map((beer) => {
        return beer.idNumber == params.id ? (
          <ItemDetail key={beer.id} beer={beer} />
        ) : null;
      })}
      {}
    </div>
  );
};

export default ItemDetailContainer;
