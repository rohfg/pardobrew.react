import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ beer }) => {
  return (
    <div className="item">
      <div className="avatarName">
        <img src={beer.avatar} alt={beer.id} />
        <h2>{beer.name}</h2>
      </div>
      <Link to={`/beer/${beer.idNumber}`}>Detalle</Link>
    </div>
  );
};

export default ItemList;
