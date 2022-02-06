import React from "react";

const ItemCount = ({
  initial,
  stock,
  countIncrement,
  countDecrement,
  remaingStock
}) => {
  return (
    <>
      <div>
        <p>stock {remaingStock} </p>
        <p className="increment" onClick={countIncrement}>
          +
        </p>
        <p>{initial}</p>
        <p className="increment" onClick={countDecrement}>
          -
        </p>
      </div>
    </>
  );
};

export default ItemCount;
